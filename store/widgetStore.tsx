import TodoList from "@/components/widgets/todo-list/TodoList";
import { Widget } from "@/types/widgets";
import { List } from "lucide-react";
import { create } from "zustand";

type WidgetPropertyKey = "opacity" | "color";

interface WidgetsState {
  widgets: Widget[];
  setWidgets: (widgets: Widget[]) => void;
  updateWidgetProperty: (
    widgetId: string,
    newKey: WidgetPropertyKey,
    newValue: any
  ) => void;
  toggleWidgetVisibility: (widgetId: string) => void;
  updateWidgetContent: (widgetId: string, newContent: any) => void;
  addWidget: (widget: Widget) => void;
  removeWidget: (widgetId: string) => void;
}

export const useWidgetsStore = create<WidgetsState>((set) => ({
  widgets: [
    {
      id: "todoList",
      name: "Todo List",
      component: <TodoList />,
      content: null,
      options: {
        opacity: 100,
        visible: true,
        color: "bg-background",
      },
      icon: <List />,
    },
  ],
  setWidgets: (widgets) => set({ widgets }),
  updateWidgetProperty: (widgetId, propertyKey, newValue) =>
    set((state) => ({
      widgets: state.widgets.map((widget) =>
        widget.id === widgetId
          ? {
              ...widget,
              options: { ...widget.options, [propertyKey]: newValue },
            }
          : widget
      ),
    })),

  toggleWidgetVisibility: (widgetId) =>
    set((state) => ({
      widgets: state.widgets.map((widget) =>
        widget.id === widgetId
          ? {
              ...widget,
              options: { ...widget.options, visible: !widget.options.visible },
            }
          : widget
      ),
    })),
  updateWidgetContent: (widgetId, newContent) =>
    set((state) => ({
      widgets: state.widgets.map((widget) =>
        widget.id === widgetId ? { ...widget, content: newContent } : widget
      ),
    })),
  addWidget: (widget) =>
    set((state) => {
      const existingWidgetIndex = state.widgets.findIndex(
        (w) => w.id === widget.id
      );
      if (existingWidgetIndex === -1) {
        return {
          ...state,
          widgets: [...state.widgets, widget],
        };
      }
      return state;
    }),
  removeWidget: (widgetId) =>
    set((state) => ({
      widgets: state.widgets.filter((widget) => widget.id !== widgetId),
    })),
}));
