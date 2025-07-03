'use client'

import { summaryToLexicalState } from "./editorHelper"
import { SerializedEditorState } from "lexical"

export async function handleUpload(
    settings: any,
    allowApiCall: string | undefined,
    setLoading: (v: boolean) => void,
    setDemo: (v: boolean) => void,
    setEditorState: (s: SerializedEditorState) => void
) {
    if (!allowApiCall) return;

    if (allowApiCall === "false") {
    if (settings.file.name === "sample.pptx") {
        setLoading(true); 
        setTimeout(() => {
            setEditorState(summaryToLexicalState("This is where sample output will be going"))
            setLoading(false); 
        }, 2000);
    } else {
            setDemo(true)
        }
    }

    if (allowApiCall === "true") {
        try {
            const formData = new FormData()
            formData.append('file', settings.file)

            const response = await fetch('/api/extract-text', {
                method: 'POST',
                body: formData,
            })

            const result = await response.json()

            const summarizeResponse = await fetch('/api/summarize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: result.text,
                    style: settings.style,
                    includeBulletPoints: settings.includeBulletPoints,
                    includeSlideTitles: settings.includeSlideTitles
                }),
            })

            const summary = await summarizeResponse.json()
            setEditorState(summaryToLexicalState(summary.summary))
        } catch (error) {
            console.error('Upload error:', error)
        } finally {
            setLoading(false)
        }
    }
}
