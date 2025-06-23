'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { SerializedEditorState } from 'lexical'

import UploadForm from './upload-form'
import { LoadingModal } from './loading-dialog'
import { DemoModal } from './demo-modal'
import { SummaryEditor } from './summary-editor'
import { handleUpload } from '@/lib/handleUpload'

export function DashboardContent() {
  const { data: session } = useSession()
  const [isLoadingOpen, setIsLoadingOpen] = useState(false)
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [editorState, setEditorState] = useState<SerializedEditorState | null>(null)

  const allowApiCall = process.env.NEXT_PUBLIC_ALLOW_API_CALL

  const handleUploadSubmit = (settings: any) => {
    handleUpload(
      settings,
      allowApiCall,
      setIsLoadingOpen,
      setIsDemoOpen,
      setEditorState
    )
  }

  const handleReset = () => {
    setEditorState(null)
  }

  return (
    <div className="relative p-4">
      {/* Reset button appears only if the editor is open */}
      {editorState && (
        <button
          onClick={handleReset}
          className="absolute top-4 left-4 bg-gray-200 hover:bg-gray-300 text-sm px-3 py-1 rounded"
        >
          ← Back to Upload
        </button>
      )}

      {/* Show upload form only if no editor is open */}
      {!editorState && <UploadForm onSubmit={handleUploadSubmit} />}

      <LoadingModal isOpen={isLoadingOpen} onClose={() => setIsLoadingOpen(false)} />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />

      {editorState && (
        <SummaryEditor
          editorState={editorState}
          onChange={(newState) => setEditorState(newState)}
        />
      )}
    </div>
  )
}
