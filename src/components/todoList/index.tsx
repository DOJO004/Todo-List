import { useState } from "react";
import TodoInput from "../ui/todoInput";
import TodoItem from "../ui/todoItem";

const TodoList = () => {
  const [todo, setTodo] = useState<string>("");

  return (
    <>
      <TodoInput todo={todo} setTodo={setTodo} />
      <TodoItem />
    </>
  );
};
export default TodoList;
