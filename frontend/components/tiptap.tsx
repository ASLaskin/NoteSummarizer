"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Heading1,
  Heading2,
  Heading3,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Tiptap = ({ initialContent = "<p>Start typing here...</p>" }: { initialContent?: string }) => {
  const [editorContent, setEditorContent] = useState(initialContent);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: editorContent,
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getHTML());
    },
  });

  if (!mounted || !editor) return null;

  const toggleBold = () => editor.chain().focus().toggleBold().run();
  const toggleItalic = () => editor.chain().focus().toggleItalic().run();
  const toggleUnderline = () => editor.chain().focus().toggleUnderline().run();
  const setHeading = (level: 1 | 2 | 3) => editor.chain().focus().toggleHeading({ level }).run();

  const isDarkMode = theme === "dark";

  return (
    <div
      className={`w-screen h-screen mx-auto mt-0 border rounded-lg shadow-lg transition-colors ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`flex items-center gap-2 p-2 border-b transition-colors ${
          isDarkMode ? "bg-gray-700 border-gray-600" : "bg-gray-100 border-gray-200"
        }`}
        role="toolbar"
        aria-label="Formatting options"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleBold}
          className={editor.isActive("bold") ? (isDarkMode ? "bg-gray-600" : "bg-gray-200") : ""}
          aria-label="Bold"
        >
          <Bold className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleItalic}
          className={editor.isActive("italic") ? (isDarkMode ? "bg-gray-600" : "bg-gray-200") : ""}
          aria-label="Italic"
        >
          <Italic className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleUnderline}
          className={editor.isActive("underline") ? (isDarkMode ? "bg-gray-600" : "bg-gray-200") : ""}
          aria-label="Underline"
        >
          <UnderlineIcon className="w-4 h-4" />
        </Button>
        <div className="w-px h-6 bg-gray-300 mx-2" role="separator" />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setHeading(1)}
          className={editor.isActive("heading", { level: 1 }) ? (isDarkMode ? "bg-gray-600" : "bg-gray-200") : ""}
          aria-label="Heading 1"
        >
          <Heading1 className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setHeading(2)}
          className={editor.isActive("heading", { level: 2 }) ? (isDarkMode ? "bg-gray-600" : "bg-gray-200") : ""}
          aria-label="Heading 2"
        >
          <Heading2 className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setHeading(3)}
          className={editor.isActive("heading", { level: 3 }) ? (isDarkMode ? "bg-gray-600" : "bg-gray-200") : ""}
          aria-label="Heading 3"
        >
          <Heading3 className="w-4 h-4" />
        </Button>
      </div>
      <EditorContent
        editor={editor}
        className={`p-4 min-h-[300px] focus:outline-none prose prose-lg focus:ring-2 focus:ring-blue-500 rounded-b-lg h-full transition-colors ${
          isDarkMode ? "prose-invert bg-gray-800" : "bg-white"
        }`}
      />
    </div>
  );
};

export default Tiptap;
