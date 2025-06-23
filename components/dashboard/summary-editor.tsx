'use client'

import { Editor } from "../blocks/editor-00/editor"
import { SerializedEditorState } from "lexical"

type Props = {
  editorState: SerializedEditorState
  onChange: (value: SerializedEditorState) => void
}

export function SummaryEditor({ editorState, onChange }: Props) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Summary Editor</h2>
      <Editor
        editorSerializedState={editorState}
        onSerializedChange={onChange}
      />
    </div>
  )
}
