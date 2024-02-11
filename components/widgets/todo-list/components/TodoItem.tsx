import { CheckCircle, Circle } from "lucide-react";
import { TodoItemProps } from "../TodoList";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TodoItem = ({
  todo,
  updateTodo,
  removeTodo,
}: {
  todo: TodoItemProps;
  updateTodo: (id: string, completed: boolean) => void;
  removeTodo: (id: string) => void;
}) => {
  return (
    <li className="flex cursor-pointer items-center">
      {todo.completed ? (
        <CheckCircle
          className="mr-2"
          onClick={() => updateTodo(todo.id, false)}
        />
      ) : (
        <Circle className="mr-4" onClick={() => updateTodo(todo.id, true)} />
      )}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <span
              className={cn(
                "transition-all duration-500 ease-in-out font-semibold",
                todo.completed && "line-through"
              )}
              onClick={() => removeTodo(todo.id)}
            >
              {todo.text}
            </span>
          </TooltipTrigger>
          <TooltipContent className="bg-destructive text-destructive-foreground">
            <p>Click To Delete</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </li>
  );
};

export default TodoItem;
