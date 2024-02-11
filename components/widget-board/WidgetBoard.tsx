"use client";

import { useState } from "react";
import Timer from "../timer/Timer";
import TodoList from "../widgets/todo-list/TodoList";
import WidgetContainer from "../widgets/WidgetContainer";
import { useWidgetsStore } from "@/store/widgetStore";

const WidgetBoard = () => {
  const { widgets } = useWidgetsStore();

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 z-20 p-4 overflow-auto">
      {widgets.map((widget) =>
        widget.options.visible ? (
          <WidgetContainer
            key={widget.id}
            opacity={widget.options.opacity}
            color={widget.options.color}
            widgetId={widget.id}
            name={widget.name}
          >
            {widget.component}
          </WidgetContainer>
        ) : null
      )}
      <Timer />
    </div>
  );
};

export default WidgetBoard;
