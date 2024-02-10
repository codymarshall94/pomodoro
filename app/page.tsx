import Background from "@/components/background/Background";
import SlideIn from "@/components/slide-in/SlideIn";
import Timer from "@/components/timer/Timer";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Audio from "@/components/audio/Audio";

export default function Home() {
  return (
    <main className="w-full h-screen grid bg-black relative">
      <Background />
      <div className="z-20">
        {/* <Audio /> */}
        <Timer />
        <Sheet>
          <SheetTrigger asChild>
            <Button>Open</Button>
          </SheetTrigger>
          <SheetContent>
            <SlideIn />
          </SheetContent>
        </Sheet>
      </div>
    </main>
  );
}
