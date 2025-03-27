import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";

export function DotBackground() {
  return (
    <div className="fixed inset-0 z-0 flex items-center justify-center bg-background">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}
