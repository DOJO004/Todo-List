interface TodoInputProps {
  todo: string;
  setTodo: Dispatch<SetStateAction<string>>;
}

const TodoInput = ({ todo, setTodo }: TodoInputProps) => {
  return (
    <div className="flex m-4 relative">
      <input
        type="text"
        className="w-full h-10 shadow-inner"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <span className="absolute right-1 top-1">
        <img
          src="src/assets/img/input.png"
          alt=""
          width={30}
          className=" opacity-30"
        />
      </span>
    </div>
  );
};

export default TodoInput;
