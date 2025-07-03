import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Toggle } from '@/components/ui/toggle';
import { useState } from 'react';
import { StepForward } from 'lucide-react';
import FileUpload from './file-upload';
import { toast } from 'sonner';
import {

    FileText,
    Sparkles,
    Settings,
    Clock,
    BarChart3,
    Zap,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
import { Badge } from '../ui/badge';

export type uploadSettings = {
    file: File | null;
    style: "wordy" | "minimal";
    includeBulletPoints: boolean;
    includeSlideTitles: boolean;
}

type Props = {
    onSubmit: (settings: uploadSettings) => void;
}

export default function UploadForm({ onSubmit }: Props) {
    const [file, setFile] = useState<File | null>(null);
    const [style, setStyle] = useState<'wordy' | 'minimal'>('minimal');
    const [includeBulletPoints, setIncludeBulletPoints] = useState(true);
    const [includeSlideTitles, setIncludeSlideTitles] = useState(true);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!file) {
            toast.error("File upload is required")
            return;
        }

        onSubmit({
            file,
            style,
            includeBulletPoints,
            includeSlideTitles,
        })
    }

    const features = [
        { icon: Zap, label: "AI-Powered", description: "Smart summarization" },
        { icon: Clock, label: "Fast", description: "Results in seconds" },
        { icon: BarChart3, label: "Detailed", description: "Comprehensive analysis" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <Badge variant="secondary" className="mb-4 animate-pulse">
                        <Sparkles className="w-4 h-4 mr-2" />
                        AI-Powered Summarization
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Transform Your{' '}
                        <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                            Documents
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Upload your presentation and get intelligent summaries in seconds
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6">
                                <h2 className="text-2xl font-semibold text-white flex items-center">
                                    <FileText className="mr-3 h-6 w-6" />
                                    Upload & Configure
                                </h2>
                                <p className="text-blue-100 mt-2">
                                    Choose your file and customize the summary settings
                                </p>
                            </div>

                            <div className="p-8">
                                <div className="space-y-8">
                                    <div>
                                        <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                                            Upload Document
                                        </Label>
                                        <FileUpload
                                            file={file}
                                            onFileChange={setFile}
                                        />
                                        <p className="text-sm text-gray-500 mt-2">
                                            Supported formats: PPT, PPTX, PDF, DOC, DOCX
                                        </p>
                                    </div>

                                    <div>
                                        <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                                            Summary Style
                                        </Label>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div
                                                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${style === 'minimal'
                                                        ? 'border-blue-500 bg-blue-50 shadow-md'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                    }`}
                                                onClick={() => setStyle('minimal')}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <div className={`w-4 h-4 rounded-full border-2 ${style === 'minimal' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                                                        }`}></div>
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900">Minimal</h3>
                                                        <p className="text-sm text-gray-500">Concise key points</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${style === 'wordy'
                                                        ? 'border-blue-500 bg-blue-50 shadow-md'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                    }`}
                                                onClick={() => setStyle('wordy')}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <div className={`w-4 h-4 rounded-full border-2 ${style === 'wordy' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                                                        }`}></div>
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900">Detailed</h3>
                                                        <p className="text-sm text-gray-500">Comprehensive analysis</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <Label className="text-lg font-semibold text-gray-900 mb-4 block flex items-center">
                                            <Settings className="mr-2 h-5 w-5" />
                                            Advanced Options
                                        </Label>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                                <div>
                                                    <Label className="font-medium text-gray-900">
                                                        Include Bullet Points
                                                    </Label>
                                                    <p className="text-sm text-gray-500">
                                                        Structure content with bullet points
                                                    </p>
                                                </div>
                                                <Switch
                                                    id="bullet-points"
                                                    checked={includeBulletPoints}
                                                    onCheckedChange={setIncludeBulletPoints}
                                                />
                                            </div>

                                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                                <div>
                                                    <Label className="font-medium text-gray-900">
                                                        Include Slide Titles
                                                    </Label>
                                                    <p className="text-sm text-gray-500">
                                                        Preserve original slide titles
                                                    </p>
                                                </div>
                                                <Switch
                                                    id="slide-titles"
                                                    checked={includeSlideTitles}
                                                    onCheckedChange={setIncludeSlideTitles}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        onClick={handleSubmit}
                                        className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-700 hover:to-blue-700 text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                                        size="lg"
                                    >
                                        <StepForward className="mr-2 h-5 w-5" />
                                        Generate Summary
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Why Choose Our AI?
                            </h3>
                            <div className="space-y-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <feature.icon className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{feature.label}</h4>
                                            <p className="text-sm text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl shadow-lg p-6 text-white">
                            <h3 className="text-lg font-semibold mb-4">Platform Stats</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-blue-100">Documents Processed</span>
                                    <span className="font-bold">10,000+</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-blue-100">Average Time Saved</span>
                                    <span className="font-bold">95%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-blue-100">User Satisfaction</span>
                                    <span className="font-bold">4.9/5</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                            <h3 className="text-lg font-semibold text-amber-900 mb-3">
                                💡 Pro Tips
                            </h3>
                            <ul className="space-y-2 text-sm text-amber-800">
                                <li>• Use high-quality documents for best results</li>
                                <li>• Try both minimal and detailed styles</li>
                                <li>• Include slide titles for better context</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}