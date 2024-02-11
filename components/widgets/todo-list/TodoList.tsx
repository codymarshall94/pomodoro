"use client";

import { useEffect, useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./components/TodoItem";
import { useWidgetsStore } from "@/store/widgetStore";

export interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const todos = useWidgetsStore(
    (state) =>
      state.widgets.find((widget) => widget.id === "todoList")?.content || []
  );
  const [newTodo, setNewTodo] = useState("");
  const updateWidgetContent = useWidgetsStore(
    (state) => state.updateWidgetContent
  );

  useEffect(() => {
    updateWidgetContent("todoList", todos);
  }, [todos, updateWidgetContent]);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      const newTodoItem: TodoItemProps = {
        id: uuidv4(),
        text: newTodo,
        completed: false,
      };
      updateWidgetContent("todoList", [...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  const handleUpdateTodo = (id: string, completed: boolean) => {
    const updatedTodos = todos.map((todo: TodoItemProps) =>
      todo.id === id ? { ...todo, completed } : todo
    );
    updateWidgetContent("todoList", updatedTodos);
  };

  const handleRemoveTodo = (id: string) => {
    const filteredTodos = todos.filter((todo: TodoItemProps) => todo.id !== id);
    updateWidgetContent("todoList", filteredTodos);
  };

  return (
    <>
      <form onSubmit={handleAddTodo} className="flex flex-col gap-4">
        <Label htmlFor="todo-text" />
        <Input
          id="todo-text"
          name="todo-text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="What do you want to do?"
        />
        <Button type="submit" disabled={newTodo === ""}>
          Add Todo
        </Button>
      </form>
      <ul className="flex flex-col gap-4">
        {todos.map((todo: TodoItemProps) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={(id, completed) => handleUpdateTodo(id, completed)}
            removeTodo={handleRemoveTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
