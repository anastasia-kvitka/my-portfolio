import { Button } from "@/components/ui/button";

export function DownloadButton() {
  return (
    <Button className="z-10">
      <a
        href="/pdf/ProductDesignResume.pdf"
        download="AnastasiaErmakovaProductDesign.pdf"
      >
        Download Resume
      </a>
    </Button>
  );
}
