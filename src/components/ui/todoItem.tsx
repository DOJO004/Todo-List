const TodoItem = () => {
  return (
    <div className="border m-4 p-2 flex items-center rounded-md shadow-sm placeholder max-h-12">
      <input type="checkbox" />
      <p className="mx-2">content</p>
    </div>
  );
};
export default TodoItem;
