import { useState } from "react";

export const AddTodo = ({makeNewTodo}) => {

    const [title, setTitle] = useState("");

    const addNewTodo = () => {
        const newToDo = {
            id: new Date(),
            title: title,
            marked: false,
        }
        
        if (title) {
            makeNewTodo(newToDo);
            setTitle("");
        }       
    }

    return (
        <form onSubmit={e=>e.preventDefault()}>
            <input type="text" placeholder="Add a new todo... " value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <button onClick={addNewTodo}>Add</button>
        </form>
    )
}