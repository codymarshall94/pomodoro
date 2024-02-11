"use client";

import { SlidersHorizontal } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import WidgetOptions from "./components/WidgetOptions";
import { WidgetComponentProps } from "@/types/widgets";
import { cn } from "@/lib/utils";

const WidgetContainer: React.FC<WidgetComponentProps> = ({
  children,
  opacity,
  widgetId,
  color,
  name,
}) => {
  return (
    <section className="flex flex-col gap-4">
      <article
        className={cn(
          "flex flex-col gap-4 p-4 text-card-foreground border rounded-lg overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
          color
        )}
        style={{ opacity: opacity / 100 }}
      >
        <header>
          <h3 className="font-bold">{name}</h3>
        </header>
        {children}
      </article>
      <div>
        <Popover>
          <PopoverTrigger>
            <SlidersHorizontal className="text-foreground" />
          </PopoverTrigger>
          <PopoverContent>
            <WidgetOptions opacity={opacity} widgetId={widgetId} />
          </PopoverContent>
        </Popover>
      </div>
    </section>
  );
};

export default WidgetContainer;
