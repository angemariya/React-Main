import { useState } from 'react';
import { TaskItem } from '../TaskItem';
import styles from'./styles.module.css';

function App() {

  const state = [
    {id: 1, title: "New 1 todo", done: false},
    {id: 2, title: "New 2 todo", done: true},
    {id: 3, title: "New 3 todo", done: false},
  ]

  const [tasks, setTasks] = useState(state);
  const [title, setTitle] = useState("")

  const removeTask = (id) => {
    setTasks(tasks.filter(el=> el.id !== id));
  };

  const onClickHandler = () => {
    
  }

  return (
    <div>
      <form onSubmit={(e)=>e.preventDefault()}>
        <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <button onClick={setTasks(title)}>Add</button>
      </form>
      
      {
      tasks.length === 0 ? 
      <p>Задач нет</p> 
      : tasks.map(el=>
        <TaskItem key={el.id} {...el} removeTask={removeTask}/>)
        }
    </div>
  )
}

export default App;
