import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Toggle } from '@/components/ui/toggle';
import { useState } from 'react';
import { StepForward } from 'lucide-react';
import FileUpload from './file-upload';
import { set } from 'mongoose';

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
            //add a toast notification here
            return;
        }

        onSubmit({
            file,
            style,
            includeBulletPoints,
            includeSlideTitles,
        })
    }


    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm border">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Lets get Started</h2>
                <p className="text-sm text-gray-600">Upload a presentation file to generate a summary</p>
            </div>

            <form>
                <div className="space-y-6">

                    <FileUpload
                        file={file}
                        onFileChange={setFile}
                    />

                    <div className="space-y-3">
                        <Label className="text-sm font-medium">Summary Style</Label>
                        <div className="flex gap-2">
                            <Toggle
                                pressed={style === 'minimal'}
                                onPressedChange={() => setStyle('minimal')}
                                variant="outline"
                                className="flex-1"
                            >
                                Minimal
                            </Toggle>
                            <Toggle
                                pressed={style === 'wordy'}
                                onPressedChange={() => setStyle('wordy')}
                                variant="outline"
                                className="flex-1"
                            >
                                Wordy
                            </Toggle>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Label className="text-sm font-medium">Options</Label>

                        <div className="flex items-center justify-between">
                            <Label className="text-sm font-normal cursor-pointer">
                                Include bullet points
                            </Label>
                            <Switch
                                id="bullet-points"
                                checked={includeBulletPoints}
                                onCheckedChange={setIncludeBulletPoints}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <Label className="text-sm font-normal cursor-pointer">
                                Include slide titles
                            </Label>
                            <Switch
                                id="slide-titles"
                                checked={includeSlideTitles}
                                onCheckedChange={setIncludeSlideTitles}
                            />
                        </div>
                    </div>

                    <Button
                        onClick={handleSubmit}
                        className="w-full"
                        disabled={!file}
                    >
                        <StepForward className="mr-2 h-4 w-4" />
                        Summarize
                    </Button>
                </div>
            </form>
        </div>
    )

}