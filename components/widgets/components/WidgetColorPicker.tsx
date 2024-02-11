import { cn } from "@/lib/utils";
import { useWidgetsStore } from "@/store/widgetStore";

const colors = [
  { name: "None", styleVar: "bg-card" },
  { name: "Red", styleVar: "bg-picker-red" },
  { name: "Green", styleVar: "bg-picker-green" },
  { name: "Blue", styleVar: "bg-picker-blue" },
  { name: "Yellow", styleVar: "bg-picker-yellow" },
  { name: "Orange", styleVar: "bg-picker-orange" },
  { name: "Teal", styleVar: "bg-picker-teal" },
  { name: "Gray", styleVar: "bg-picker-gray" },
];

const WidgetColorPicker = ({ widgetId }: { widgetId: string }) => {
  const updateWidgetProperty = useWidgetsStore(
    (state) => state.updateWidgetProperty
  );

  return (
    <div className="flex flex-wrap">
      {colors.map((color) => (
        <div
          key={color.name}
          className={cn(
            "w-12 h-12 flex text-xs justify-center items-center m-1 rounded cursor-pointer border-2 border-transparent hover:border-primary",
            color.styleVar
          )}
          onClick={() =>
            updateWidgetProperty(widgetId, "color", color.styleVar)
          }
        >
          {color.name === "None" && "None"}
        </div>
      ))}
    </div>
  );
};

export default WidgetColorPicker;
