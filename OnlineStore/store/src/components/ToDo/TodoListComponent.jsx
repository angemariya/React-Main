import React, { useState } from 'react';
import todos from './todos.json';
import { Todo } from './TodoComponent';
import { AddTodo } from './AddTodo';

export const TodoListComponent = () => {
  const [todoList, setTodoList] = useState(todos);

  return (
    <div>
      {todoList.map((el) => (
        <Todo key={el.id} {...el} />
      ))}
    </div>
  )
}
