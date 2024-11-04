"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Loader2 } from "lucide-react"

export function ModalWithLoading({ isOpen }: { isOpen: boolean }) {
  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-[425px]">
        {/* In DialogHeader definition the corner X to close can be uncommented and add */}
        <DialogHeader>
          <DialogTitle>Processing Your Request</DialogTitle>
          <DialogDescription>
            Please wait while we process your request. This may take a few moments.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center py-6">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </DialogContent>
    </Dialog>
  );
}