import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Upload, FileText, X, Download } from 'lucide-react';

type Props = {
    file: File | null;
    onFileChange: (file: File | null) => void;
}

export default function FileUpload({ file, onFileChange }: Props) {
    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        //not too sure about this 
        const selectedFile = e.target.files?.[0]
        if (!selectedFile) return;

        const maxSize = 10 * 1024 * 1024; //10MB
        if (selectedFile.size > maxSize) {
            //add toast
            return;
        }

        onFileChange(selectedFile);
    }

    function removeFile() {
        onFileChange(null)
    }

    function onSampleFile(){
        //download sample file
    }

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">
                    Choose File
                </Label>
                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={onSampleFile}
                    className="text-xs"
                >
                    <Download className="mr-1 h-3 w-3" />
                    Need a sample?
                </Button>
            </div>

            {!file ? (
                <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-colors cursor-pointer">
                    <Input
                        id="file"
                        type="file"
                        accept=".pdf,.ppt,.pptx"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center justify-center text-center">
                        <Upload className="h-10 w-10 text-gray-400 mb-3" />
                        <p className="text-sm text-gray-600 mb-1 font-medium">
                            Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-gray-400">
                            PDF, PPT, PPTX files only
                        </p>
                    </div>
                </div>
            ) : (
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                                <FileText className="h-8 w-8 text-blue-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    {file.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                    File uploaded successfully
                                </p>
                            </div>
                        </div>
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={removeFile}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}