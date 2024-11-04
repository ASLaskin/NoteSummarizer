"use client";

import { useSearchParams } from "next/navigation";
import Tiptap from "@/components/tiptap";

export default function Editor() {
  const searchParams = useSearchParams();
  const content = searchParams.get("content") || "Hello world";

  return <Tiptap initialContent={content} />;
}