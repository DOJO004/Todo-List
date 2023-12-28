import { Dispatch, FormEvent, SetStateAction } from "react";

interface TodoInputProps {
  todo: string;
  setTodo: Dispatch<SetStateAction<string>>;
  addTodo: (e :FormEvent)=> void
}

const TodoInput = ({todo, setTodo, addTodo}: TodoInputProps) => {
  return (
    <form className="relative flex m-4">
      <input
        type="text"
        className="w-full h-10 px-4 pr-10 shadow-inner"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button 
      className="absolute text-xl font-bold right-4 top-2"
      onClick={(e)=>addTodo(e)}
      >
        OK
      </button>
    </form>
  );
};

export default TodoInput;
