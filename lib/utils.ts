import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractYoutubeId = (link: string) => {
  // Regular expression to match YouTube video URL
  const youtubeRegex =
    /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]+)$/;

  // Check if the link matches the YouTube URL pattern
  const isYoutubeLink = youtubeRegex.test(link);

  if (isYoutubeLink) {
    // Extract the video ID
    const match = link.match(
      /(?:\?v=|\/embed\/|\/\d\/|\/vi\/|\/v\/|https:\/\/youtu.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  } else {
    return null;
  }
};
