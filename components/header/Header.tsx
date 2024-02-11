"use client";

import { useWidgetsStore } from "@/store/widgetStore";
import SlideIn from "../slide-in/SlideIn";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Widget } from "@/types/widgets";
import { ModeToggle } from "./components/mode-toggle";

const Header = () => {
  const { widgets } = useWidgetsStore();
  const toggleWidgetVisibility = useWidgetsStore(
    (state) => state.toggleWidgetVisibility
  );

  return (
    <div className="flex justify-between max-h-min z-20 p-4">
      <div className="flex gap-2">
        {widgets.map((widget: Widget) => (
          <Button
            key={widget.id}
            variant={widget.visible ? "secondary" : "ghost"}
            onClick={() => toggleWidgetVisibility(widget.id)}
          >
            {widget.icon}
          </Button>
        ))}
      </div>
      <div className="flex gap-2">
        <ModeToggle />
        <Sheet>
          <SheetTrigger asChild>
            <Button>Open</Button>
          </SheetTrigger>
          <SheetContent>
            <SlideIn />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
