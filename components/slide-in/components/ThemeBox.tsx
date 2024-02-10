import { useThemeStore } from "@/store/themeStore";
import Image from "next/image";

const ThemeBox = ({
  themeName,
  themeImg,
}: {
  themeName: string;
  themeImg: string | null;
}) => {
  const { setTheme } = useThemeStore();
  return (
    <div
      className="flex justify-center items-center overflow-hidden border-2 min-h-40 rounded-md hover:border-primary transition ease-in-out 5s relative"
      onClick={() => setTheme({ name: themeName, videoId: themeImg })}
    >
      <Image
        src={`https://img.youtube.com/vi/${themeImg}/maxresdefault.jpg`}
        alt="video thumbnail"
        fill
        className="hover:scale-125 transition-all opacity-90"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      <span className="z-10 font-bold text-white">{themeName}</span>
    </div>
  );
};

export default ThemeBox;
