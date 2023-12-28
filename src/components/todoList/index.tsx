import { FormEvent, useEffect, useState } from 'react';
import TodoInput from '../ui/todoInput';
import TodoItem from '../ui/todoItem';

const TodoList = () => {
  const [todo, setTodo] = useState<string>('');
  const [todoList, setTodoList] = useState<string[]>(() => {
    const storedTodoList = localStorage.getItem('todoList');
    return storedTodoList ? JSON.parse(storedTodoList) : [];
  });  
  const [finish, setFinish] = useState<string[]>([])

  const addTodo = (e: FormEvent) => {
    e.preventDefault();
    setTodoList((prev) => prev.concat(todo));
    setTodo('');
  };

  const checkedTodo = (item:string)=>{
    if(finish.includes(item)){
      setFinish((prev) => prev.filter((finishItem) => finishItem !== item));
    }else{
      setFinish((prev)=> [...prev, item])
    }
  }

  const deleteTodo=(items:string)=>{
    setTodoList((prev)=>prev.filter((deleteItem)=> deleteItem!= items))
    setLocalStorage()
  }

  const setLocalStorage = ()=>{
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  const getLocalStorage = ()=>{
    const item = localStorage.getItem("todoList")
    if(item){
      setTodoList(JSON.parse(item))
    }
  }

  // 從 localStorage 取得儲存的 todoList
  useEffect(()=>{
    getLocalStorage()
  },[])

  // 每次 todoList 更新時，將其保存到 localStorage 中
  useEffect(() => {
    setLocalStorage()
  }, [todoList]);

  return (
    <>
      <p className='text-4xl font-bold text-center'>TODO LIST</p>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoItem 
      todoList={todoList}
      checkedTodo={checkedTodo}
      finish={finish}
      deleteTodo={deleteTodo}
       />
    </>
  );
};
export default TodoList;
