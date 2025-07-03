import { useState } from "react"
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"


import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin"
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin"
import { ClearEditorPlugin } from "@lexical/react/LexicalClearEditorPlugin"
import { ClickableLinkPlugin } from "@lexical/react/LexicalClickableLinkPlugin"
import { HashtagPlugin } from "@lexical/react/LexicalHashtagPlugin"
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
import { HorizontalRulePlugin } from "@lexical/react/LexicalHorizontalRulePlugin"
import { ListPlugin } from "@lexical/react/LexicalListPlugin"
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin"

import { ContentEditable } from "@/components/editor/editor-ui/content-editable"
import { ToolbarPlugin } from "@/components/editor/plugins/toolbar/toolbar-plugin"
import { BlockFormatDropDown } from "@/components/editor/plugins/toolbar/block-format-toolbar-plugin"
import { FormatParagraph } from "@/components/editor/plugins/toolbar/block-format/format-paragraph"
import { FormatHeading } from "@/components/editor/plugins/toolbar/block-format/format-heading"
import { FormatNumberedList } from "@/components/editor/plugins/toolbar/block-format/format-numbered-list"
import { FormatBulletedList } from "@/components/editor/plugins/toolbar/block-format/format-bulleted-list"
import { FormatCheckList } from "@/components/editor/plugins/toolbar/block-format/format-check-list"
import { FormatQuote } from "@/components/editor/plugins/toolbar/block-format/format-quote"
import { HistoryToolbarPlugin } from "@/components/editor/plugins/toolbar/history-toolbar-plugin"
import { FontFamilyToolbarPlugin } from "@/components/editor/plugins/toolbar/font-family-toolbar-plugin"
import { FontFormatToolbarPlugin } from "@/components/editor/plugins/toolbar/font-format-toolbar-plugin"
import { FontSizeToolbarPlugin } from "@/components/editor/plugins/toolbar/font-size-toolbar-plugin"
import { ClearFormattingToolbarPlugin } from "@/components/editor/plugins/toolbar/clear-formatting-toolbar-plugin"
import { LinkToolbarPlugin } from "@/components/editor/plugins/toolbar/link-toolbar-plugin"
import { FontColorToolbarPlugin } from "@/components/editor/plugins/toolbar/font-color-toolbar-plugin"
import { FontBackgroundToolbarPlugin } from "@/components/editor/plugins/toolbar/font-background-toolbar-plugin"
import { ElementFormatToolbarPlugin } from "@/components/editor/plugins/toolbar/element-format-toolbar-plugin"
import { Separator } from "@/components/ui/separator"

import { ActionsPlugin } from "@/components/editor/plugins/actions/actions-plugin"
import { CounterCharacterPlugin } from "@/components/editor/plugins/actions/counter-character-plugin"
import { ImportExportPlugin } from "@/components/editor/plugins/actions/import-export-plugin"
import { SpeechToTextPlugin } from "@/components/editor/plugins/actions/speech-to-text-plugin"
import { ClearEditorActionPlugin } from "@/components/editor/plugins/actions/clear-editor-plugin"


export function Plugins() {
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null)

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem)
    }
  }

  return (
    <div className="relative">
      <ToolbarPlugin>
        {({ blockType }) => (
          <div className="vertical-align-middle sticky top-0 z-10 flex items-center gap-2 overflow-auto border-b p-1">
            <HistoryToolbarPlugin />
            <Separator orientation="vertical" className="!h-7" />
            <BlockFormatDropDown>
              <FormatParagraph />
              <FormatHeading levels={["h1", "h2", "h3"]} />
              <FormatNumberedList />
              <FormatBulletedList />
              <FormatCheckList />
              <FormatQuote />
            </BlockFormatDropDown>
            <>
              <FontFamilyToolbarPlugin />
              <FontSizeToolbarPlugin />
              <Separator orientation="vertical" className="!h-7" />
              <FontFormatToolbarPlugin format="bold" />
              <FontFormatToolbarPlugin format="italic" />
              <FontFormatToolbarPlugin format="underline" />
              <FontFormatToolbarPlugin format="strikethrough" />
              <Separator orientation="vertical" className="!h-7" />
              <LinkToolbarPlugin />
              <Separator orientation="vertical" className="!h-7" />
              <ClearFormattingToolbarPlugin />
              <Separator orientation="vertical" className="!h-7" />
              <FontColorToolbarPlugin />
              <FontBackgroundToolbarPlugin />
              <Separator orientation="vertical" className="!h-7" />
              <ElementFormatToolbarPlugin />
              <Separator orientation="vertical" className="!h-7" />
            </>
          </div>
        )}
      </ToolbarPlugin>
      <div className="relative">
        <RichTextPlugin
          contentEditable={
            <div className="">
              <div className="" ref={onRef}>
                <ContentEditable placeholder={"Start typing ..."} />
              </div>
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <ClickableLinkPlugin />
        <CheckListPlugin />
        <HorizontalRulePlugin />
        <ListPlugin />
        <TabIndentationPlugin />
        <HashtagPlugin />
        <HistoryPlugin />

        {/* editor plugins */}
      </div>
      <ActionsPlugin>
        <div className="clear-both flex items-center justify-between gap-2 overflow-auto border-t p-1">
          <div>
            <CounterCharacterPlugin charset="UTF-16" />
          </div>
          <div className="flex flex-1 justify-end">
            <SpeechToTextPlugin />
            <ImportExportPlugin />
            <>
              <ClearEditorActionPlugin />
              <ClearEditorPlugin />
            </>
          </div>
        </div>
      </ActionsPlugin>
    </div>
  )
}
