import { Moon, Sun } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="rounded-full size-12 flex items-center justify-center">
          {resolvedTheme === "light" ? (
            <Moon className="w-5 h-5" onClick={() => setTheme("dark")} />
          ) : (
            <Sun className="w-5 h-5" onClick={() => setTheme("light")} />
          )}
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>Theme</p>
      </TooltipContent>
    </Tooltip>
  );
}
