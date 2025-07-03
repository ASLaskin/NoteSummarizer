import { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

interface LoadingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function LoadingModal({ isOpen }: LoadingModalProps) {
    //chatgpt to create arbitrary messages lol
    const messages = [
        "Waking up the hamsters...",
        "Convincing electrons to cooperate...",
        "Asking the server nicely...",
        "Bribing the database with cookies...",
        "Teaching AI to read your mind...",
        "Summoning digital spirits...",
        "Untangling spaghetti code...",
        "Feeding data to hungry algorithms...",
        "Politely requesting patience...",
        "Consulting the magic 8-ball...",
        "Downloading more RAM...",
        "Turning it off and on again...",
        "Sacrificing a USB cable...",
        "Waiting for coffee to kick in...",
        "Negotiating with stubborn pixels...",
        "Reticulating splines...",
        "Calibrating flux capacitor...",
        "Pretending to work hard...",
        "Counting backwards from infinity...",
        "Solving world hunger... oh wait, wrong task",
        "Translating binary jokes...",
        "Organizing digital chaos...",
        "Herding cats in cyberspace..."
    ];

    const [currentMessage, setCurrentMessage] = useState("");

    useEffect(() => {
        if (!isOpen) {
            setCurrentMessage("");
            return;
        }

        setCurrentMessage(messages[Math.floor(Math.random() * messages.length)]);

        const updateMessage = () => {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            setCurrentMessage(randomMessage);

            const randomDelay = Math.random() * 3000 + 1000;
            setTimeout(updateMessage, randomDelay);
        };

        const initialDelay = Math.random() * 2000 + 1500;
        const timeoutId = setTimeout(updateMessage, initialDelay);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isOpen]);

    return (
        <Dialog open={isOpen}>
            <DialogContent
                className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Processing File</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center justify-center py-6">
                    <div className="relative">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200"></div>
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent absolute top-0 left-0"></div>
                    </div>
                    <div className="mt-6 h-6 flex items-center">
                        <p className="text-center text-gray-600 animate-pulse min-h-[1.5rem]">
                            {currentMessage}
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}