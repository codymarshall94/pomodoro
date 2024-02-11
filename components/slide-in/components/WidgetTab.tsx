import { Button } from "@/components/ui/button";
import { WidgetType, widgetTypes } from "@/constants/widgets";
import { useWidgetsStore } from "@/store/widgetStore";
import { Widget } from "@/types/widgets";

const WidgetTab = () => {
  const { addWidget, removeWidget, widgets } = useWidgetsStore();

  const toggleWidget = (widget: WidgetType) => {
    if (isWidgetAdded(widget.id)) {
      removeWidget(widget.id);
    } else {
      const newWidget: Widget = {
        ...widget,
        options: {
          opacity: 100,
          visible: true,
          color: "bg-card",
        },
        content: null,
      };
      addWidget(newWidget);
    }
  };

  const isWidgetAdded = (widgetId: string) =>
    widgets.some((widget) => widget.id === widgetId);

  return (
    <ul className="grid grid-cols-2 gap-2">
      {widgetTypes.map((widget) => (
        <li
          key={widget.id}
          className="flex flex-col items-center gap-2 border rounded-md p-4"
        >
          {widget.icon}
          <span className="font-semibold">{widget.name}</span>
          <Button
            variant={isWidgetAdded(widget.id) ? "secondary" : "default"}
            className="w-full"
            onClick={() => toggleWidget(widget)}
          >
            {isWidgetAdded(widget.id) ? "Remove" : "Add"}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default WidgetTab;
