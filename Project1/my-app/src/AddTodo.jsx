import { useState } from "react";

export const AddTodo = ({makeTodo}) => {

    const [title, setTitle] = useState("");

    const addNewTodo = (e) => {
        const newToDo = {
            id: new Date(),
            title: title,
            marked: false,
        }
        e.preventDefault();
        if (title) {
            makeTodo(newToDo);
            setTitle("");
        }       
    }

    return (
        <form onSubmit={addNewTodo}>
            <input type="text" placeholder="Add a new todo... " value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <button type="submit">Add</button>
        </form>
    )
}