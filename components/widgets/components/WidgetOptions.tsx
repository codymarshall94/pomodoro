import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useWidgetsStore } from "@/store/widgetStore";

const WidgetOptions = ({
  widgetId,
  opacity,
}: {
  widgetId: string;
  opacity: number;
}) => {
  const { updateWidgetOpacity } = useWidgetsStore();
  return (
    <div className="flex flex-col gap-4">
      <Label htmlFor="opacity-slider">Opacity</Label>
      <Slider
        id="opacity-slider"
        name="opacity"
        defaultValue={[opacity]}
        min={10}
        max={100}
        onValueChange={(value) => updateWidgetOpacity(widgetId, value[0])}
      />
    </div>
  );
};

export default WidgetOptions;
