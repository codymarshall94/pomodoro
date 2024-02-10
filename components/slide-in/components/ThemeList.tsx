import { Theme } from "@/types/theme";
import ThemeBox from "./ThemeBox";

const ThemeList = ({ themes }: { themes: Theme[] }) => {
  console.log(themes);
  return (
    <div className="grid grid-cols-2 gap-4">
      {themes.map((theme: Theme) => (
        <ThemeBox
          key={theme.videoId}
          themeName={theme.name}
          themeImg={theme.videoId}
        />
      ))}
    </div>
  );
};

export default ThemeList;
