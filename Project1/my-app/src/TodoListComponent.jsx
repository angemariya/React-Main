import React, { useState } from 'react';
import todos from './todos.json';
import { Todo } from './TodoComponent';
import { AddTodo } from './AddTodo';


export const TodoListComponent = () => {
  const [todoList, setTodoList] = useState(todos);

  const makeNewTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  };

  const doneTodo = (id) => {
    const checkedTodo = todoList.find(item=>item.id === id);
    checkedTodo.marked = !checkedTodo.marked;
    setTodoList([...todoList]);
  }

  const deletedTodo = (id) => {
    setTodoList(todoList.filter(item=>item.id !== id))
  }

  return (
    <div>
      <AddTodo makeNewTodo={makeNewTodo}/>
      <div>
       {todoList.map((el) => (
        <Todo 
        key={el.id} 
        {...el} 
        deletedTodo={deletedTodo} 
        doneTodo={doneTodo}/>
      ))} 
      </div>
      
    </div>
  )
}
