"use client";

import { useRouter } from "next/navigation";
import UploadForm from "@/components/upload";
import FeaturesSection from "@/components/features";
import TitleSection from "@/components/title";

export default function Home() {
  const router = useRouter();

  const navigateToEditor = (content: string) => {
    router.push(`/editor?content=${encodeURIComponent(content)}`);
  };

  return (
    <>
      <TitleSection navigateToEditor={navigateToEditor} />
      <FeaturesSection />
    </>
  );
}