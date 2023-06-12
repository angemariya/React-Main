import React from 'react';
import classes from './Todo.module.css';

export const Todo = ({id, title, marked, doneTodo, deletedTodo }) => {
  return (
    <div className={marked ? classes.done : classes.todo }>
      <input type="checkbox" checked={marked} onChange={()=>doneTodo(id)} />
      <span>{title}</span>
      <button className={classes.deletedTodo} onClick={()=>deletedTodo(id)}>{marked ? 'Выполнено' : 'Сделать'}</button>
    </div>
  )
}
