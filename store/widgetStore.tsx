import TodoList from "@/components/widgets/todo-list/TodoList";
import { Widget } from "@/types/widgets";
import { List } from "lucide-react";
import { create } from "zustand";

interface WidgetsState {
  widgets: Widget[];
  setWidgets: (widgets: Widget[]) => void;
  updateWidgetOpacity: (widgetId: string, newOpacity: number) => void;
  toggleWidgetVisibility: (widgetId: string) => void;
  addWidget: (widget: Widget) => void;
  removeWidget: (widgetId: string) => void;
}

export const useWidgetsStore = create<WidgetsState>((set) => ({
  widgets: [
    {
      id: "todoList",
      component: <TodoList />,
      opacity: 100,
      visible: true,
      icon: <List />,
    },
  ],
  setWidgets: (widgets) => set({ widgets }),
  updateWidgetOpacity: (widgetId, newOpacity) =>
    set((state) => ({
      widgets: state.widgets.map((widget) =>
        widget.id === widgetId ? { ...widget, opacity: newOpacity } : widget
      ),
    })),
  toggleWidgetVisibility: (widgetId) =>
    set((state) => ({
      widgets: state.widgets.map((widget) =>
        widget.id === widgetId
          ? { ...widget, visible: !widget.visible }
          : widget
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
