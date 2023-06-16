import React from 'react'
import classes from './Todo.module.css'

export const Todo = ({ title, marked }) => {
  return (
    <div className={marked ? classes.done : ''}>
      <input type="checkbox" checked={marked}></input>
      <span>{title}</span>
      <button>{marked ? 'Выполнено' : 'Сделать'}</button>
    </div>
  )
}
