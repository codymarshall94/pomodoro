import { CheckCircle, Circle } from "lucide-react";
import { TodoItemProps } from "../TodoList";
import { cn } from "@/lib/utils";

const TodoItem = ({
  todo,
  updateTodo,
}: {
  todo: TodoItemProps;
  updateTodo: (id: string) => void;
}) => {
  return (
    <li className="flex cursor-pointer">
      {todo.completed ? (
        <CheckCircle className="mr-2" />
      ) : (
        <Circle className="mr-2" onClick={() => updateTodo(todo.id)} />
      )}
      <span
        className={cn(
          "transition-all duration-500 ease-in-out font-semibold",
          todo.completed && "line-through"
        )}
      >
        {todo.text}
      </span>
    </li>
  );
};

export default TodoItem;
