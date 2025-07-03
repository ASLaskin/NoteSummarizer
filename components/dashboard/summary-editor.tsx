'use client'

import { Editor } from "../blocks/editor-00/editor"
import { SerializedEditorState } from "lexical"
import { Edit3, Sparkles } from "lucide-react"
type Props = {
  editorState: SerializedEditorState
  onChange: (value: SerializedEditorState) => void
}

export function SummaryEditor({ editorState, onChange }: Props) {
  return (
    <div className="mt-6">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Edit3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white">Summary Editor</h2>
              <p className="text-green-100">Edit and customize your AI-generated summary</p>
            </div>
          </div>
        </div>
      </div>
      <Editor
        editorSerializedState={editorState}
        onSerializedChange={onChange}
      />
    </div>
  )
}
