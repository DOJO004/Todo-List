interface todoItemProps {
  todoList: string[];
  checkedTodo: (item: string) => void
  finish: string[]
  deleteTodo: (item:string)=>void
}

const TodoItem = ({ todoList, checkedTodo, finish,deleteTodo }: todoItemProps) => {
  return (
    <>
      {todoList.map((items) => (
        <div
          className={`flex items-center p-2 m-4 border rounded-md shadow-sm placeholder relative  ${finish.includes(items) ? "opacity-30" : ""}`}
          key={items}>
          <input type='checkbox' onClick={() => checkedTodo(items)} />
          <p className='mx-2'>{items}</p>
          <img
            src="/src/assets/img/bin.png"
            alt="bin"
            width={20}
            className="absolute cursor-pointer right-5"
            onClick={()=>deleteTodo(items)}
            />
        </div>
      ))}
    </>
  );
};
export default TodoItem;
