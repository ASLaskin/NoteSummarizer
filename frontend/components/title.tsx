import UploadForm from "./upload";

interface TitleSectionProps {
  navigateToEditor: (content: string) => void;
}

export default function TitleSection({ navigateToEditor }: TitleSectionProps) {
  return (
    <>
      <section className="relative bg-green-500 dark:bg-green-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to NoteNectar
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Transform lengthy documents into concise, organized notes with ease.
            Our powerful AI summarizer extracts the key points from any PDF,
            helping you save time and focus on what really matters.
          </p>
          <div className="mt-8 flex justify-center">
            <UploadForm onUploadSuccess={navigateToEditor} />
          </div>
        </div>
      </section>
    </>
  );
}
