import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useWidgetsStore } from "@/store/widgetStore";
import WidgetColorPicker from "./WidgetColorPicker";

const WidgetOptions = ({
  widgetId,
  opacity,
}: {
  widgetId: string;
  opacity: number;
}) => {
  const { updateWidgetProperty } = useWidgetsStore();
  return (
    <div className="flex flex-col gap-4">
      <Label htmlFor="opacity-slider">Opacity</Label>
      <Slider
        id="opacity-slider"
        name="opacity"
        defaultValue={[opacity]}
        min={10}
        max={100}
        onValueChange={(value) =>
          updateWidgetProperty(widgetId, "opacity", value[0])
        }
      />
      <WidgetColorPicker widgetId={widgetId} />
    </div>
  );
};

export default WidgetOptions;
