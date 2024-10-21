'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
  })

  return (
    <div className="p-4 border border-gray-300 rounded-md shadow-lg bg-white">
      <EditorContent
        editor={editor}
        className="prose prose-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500 rounded-md min-h-[200px]"
      />
    </div>
  )
}

export default Tiptap