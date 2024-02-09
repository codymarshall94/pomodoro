import Background from "@/components/background/Background";
import SlideIn from "@/components/slide-in/SlideIn";
import Timer from "@/components/timer/Timer";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Home() {
  return (
    <main className="w-full h-screen grid bg-black relative">
      <Background />
      <div className="z-20">
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
