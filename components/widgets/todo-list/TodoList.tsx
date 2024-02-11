"use client";

import { useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./components/TodoItem";

export interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<TodoItemProps[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    console.log(newTodo);
    if (newTodo !== "") {
      const newTodoItem: TodoItemProps = {
        id: uuidv4(),
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  const handleUpdateTodo = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className="flex flex-col bg-card rounded-md p-4 gap-4 h-min opac">
      <h3 className="text-primary font-bold">Todo List</h3>
      <Label htmlFor="todo-text" />
      <Input
        id="todo-text"
        name="todo-text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="What do you want to do?"
      />
      <Button disabled={newTodo === ""} onClick={handleAddTodo}>
        Add Todo
      </Button>
      <ul className="flex flex-col gap-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} updateTodo={handleUpdateTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
