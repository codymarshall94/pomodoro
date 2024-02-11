import DateAndTime from "@/components/widgets/date-and-time/DateAndTime";
import Notepad from "@/components/widgets/notepad/Notepad";
import TodoList from "@/components/widgets/todo-list/TodoList";
import { Clock, List, Notebook } from "lucide-react";

export interface WidgetType {
  id: string;
  name: string;
  component: React.ReactNode;
  icon: React.ReactNode;
}

export const widgetTypes: WidgetType[] = [
  {
    id: "todoList",
    name: "Todo List",
    component: <TodoList />,
    icon: <List />,
  },
  {
    id: "notepad",
    name: "Notepad",
    component: <Notepad />,
    icon: <Notebook />,
  },
  {
    id: "dateTime",
    name: "Date and Time",
    component: <DateAndTime />,
    icon: <Clock />,
  },
];
