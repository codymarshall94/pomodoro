import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { extractYoutubeId } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  themeName: z.string().min(2, {
    message: "Theme name must be at least 2 characters.",
  }),
  themeVideoId: z
    .string()
    .url()
    .refine(
      (url) => {
        try {
          const parsedUrl = new URL(url);
          const hostname = parsedUrl.hostname;
          return (
            hostname === "www.youtube.com" ||
            hostname === "youtube.com" ||
            hostname === "youtu.be"
          );
        } catch {
          return false; // Not a valid URL
        }
      },
      {
        message: "URL must be from YouTube",
      }
    ),
});

const AddThemeForm = ({ onSave }: { onSave: (data: any) => void }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      themeName: "",
      themeVideoId: "",
    },
  });

  const handleSubmit = (data: any) => {
    const { themeName, themeVideoId } = data;
    const videoId = extractYoutubeId(themeVideoId);
    console.log(videoId);
    if (videoId !== null) {
      onSave({ themeName, videoId });
    } else {
      console.error("Invalid YouTube link");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-4 pb-4"
      >
        <FormField
          control={form.control}
          name="themeName"
          render={({ field }) => (
            <FormItem className="grid w-full max-w-sm items-center gap-1.5">
              <FormLabel>Theme Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  id="theme-name"
                  placeholder="What is this called?"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="themeVideoId"
          render={({ field }) => (
            <FormItem className="grid w-full max-w-sm items-center gap-1.5">
              <FormLabel>Youtube Link</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  id="youtube-link"
                  placeholder="Enter a youtube link.."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save Theme</Button>
      </form>
    </Form>
  );
};

export default AddThemeForm;
