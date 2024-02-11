"use client";

import { SlidersHorizontal } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import WidgetOptions from "./components/WidgetOptions";
import { WidgetComponentProps } from "@/types/widgets";

const WidgetContainer: React.FC<WidgetComponentProps> = ({
  children,
  opacity,
  widgetId,
}) => {
  return (
    <div className="flex flex-col gap-4" style={{ opacity: opacity / 100 }}>
      {children}
      <Popover>
        <PopoverTrigger>
          <SlidersHorizontal className="text-white" />
        </PopoverTrigger>
        <PopoverContent>
          <WidgetOptions opacity={opacity} widgetId={widgetId} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default WidgetContainer;
