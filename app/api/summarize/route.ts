import { NextRequest, NextResponse } from "next/server";

interface SummarizeRequestBody {
    text: string;
}

interface OpenAIMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

interface OpenAIResponse {
    choices: {
        message: {
            content: string;
        };
    }[];
}

export async function POST(request: NextRequest) {
    try {
        const body: SummarizeRequestBody = await request.json();
        const text = body;

        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json(
                { error: 'OpenAI API key missing' },
                { status: 500 }
            );
        }


        //change the prompt
        const messages: OpenAIMessage[] = [
            {
                role: 'user',
                content: `Please summarize the following text: ${text}`
            }
        ]

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages,
                max_tokens: 150,
                temperature: 0.7,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.log('OpenAI API error:', response.status, errorText);

            return NextResponse.json(
                { error: `OpenAI API error: ${response.status}` },
                { status: 500 }
            );
        }

        const data: OpenAIResponse = await response.json();

        if (!data.choices || data.choices.length === 0) {
            return NextResponse.json(
                { error: 'No response from OpenAI' },
                { status: 500 }
            );
        }

        const summary = data.choices[0].message.content;

        return NextResponse.json({ summary });

    } catch {
        console.log("ChatGPT API didnt work")
        return NextResponse.json(
            { error: 'Failed to generate summary' },
            { status: 500 }
        );
    }
}