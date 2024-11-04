"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { ModalWithLoading } from "@/components/modal-with-loading"; 

const UploadForm: React.FC = () => {
  const [uploaded, setUploaded] = useState<boolean | null>(true);
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedFile = e.target.files[0];
      setFile(uploadedFile);
      setFileName(uploadedFile.name); 
      setResult(URL.createObjectURL(uploadedFile));
      setUploaded(true);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!file) {
      console.error("No file selected");
      setUploaded(false);
      return;
    }

    setIsModalOpen(true);

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }

      const result = await response.json();
      setResult(result.notes);

      console.log(result.notes);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsModalOpen(false); // Close modal once upload completes
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="file-input"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">PDF only</p>
          </div>
          <input
            id="file-input"
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>
      {uploaded ? (
        <h1></h1>
      ) : (
        <h1 className="text-red-500">File was not uploaded</h1>
      )}
      {fileName && (
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          Uploaded file: <span className="font-medium">{fileName}</span>
        </p>
      )}
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-900"
      >
        Upload and Summarize
      </button>
      {result && (
        <div className="mt-4 w-full h-64 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <iframe
            src={result}
            width="100%"
            height="100%"
            className="rounded-lg"
            title="PDF Preview"
          ></iframe>
        </div>
      )}

      {/* Render modal */}
      <ModalWithLoading isOpen={isModalOpen} />
    </form>
  );
};

export default UploadForm;
