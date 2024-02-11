"use client";

import { Button } from "@/components/ui/button";
import ThemeBox from "./ThemeBox";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Theme } from "@/types/theme";
import { extractYoutubeId } from "@/lib/utils";
import AddThemeForm from "./AddThemeForm";
import ThemeList from "./ThemeList";

const initialThemes = [
  { name: "Cozy", videoId: "zIXD48Pat7s" },
  { name: "Coding", videoId: "ZlQOkHMdugg" },
  { name: "Space", videoId: "u592kfr6c20" },
  { name: "Serene", videoId: "ztVV54sPOns" },
];

const ThemeTab = () => {
  const [userThemes, setUserThemes] = useState<Theme[]>(initialThemes);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const buttonVariant = isFormOpen ? "secondary" : "default";
  const buttonContent = isFormOpen ? (
    "Cancel"
  ) : (
    <>
      <Plus className="mr-2 h-4 w-4" /> New Theme
    </>
  );

  const handleSaveTheme = (data: any) => {
    const { themeName, videoId } = data;
    const newTheme = {
      name: themeName,
      videoId: videoId,
    };
    setUserThemes([...userThemes, newTheme]);
    setIsFormOpen(false);
  };

  return (
    <>
      <div className="flex justify-end pb-8">
        <Button
          variant={buttonVariant}
          onClick={() => setIsFormOpen(!isFormOpen)}
          className="mt-4 transition-all duration-500 ease-in-out"
        >
          {buttonContent}
        </Button>
      </div>
      <div
        className={`mt-4 transition-all duration-500 ease-in-out ${
          isFormOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <AddThemeForm onSave={handleSaveTheme} />
      </div>
      <ThemeList themes={userThemes} />
    </>
  );
};

export default ThemeTab;
