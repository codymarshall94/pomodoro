import { Button } from "@/components/ui/button";
import ThemeBox from "./ThemeBox";
import { Plus } from "lucide-react";

const themes = [
  { name: "Cozy", videoId: "zIXD48Pat7s" },
  { name: "Coding", videoId: "ZlQOkHMdugg" },
  { name: "Space", videoId: "u592kfr6c20" },
  { name: "Serene", videoId: "ztVV54sPOns" },
];

const ThemeTab = () => {
  return (
    <>
      <div className="flex justify-end pb-8">
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Theme
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {themes.map((theme) => (
          <ThemeBox themeName={theme.name} themeImg={theme.videoId} />
        ))}
      </div>
    </>
  );
};

export default ThemeTab;
