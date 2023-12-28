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
         <button
          className="absolute text-xl font-bold right-5"
          onClick={()=>deleteTodo(items)}
         >
          X
         </button>
        </div>
      ))}
    </>
  );
};
export default TodoItem;
