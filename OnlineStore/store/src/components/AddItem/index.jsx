import { useState } from "react";
import styles from "./styles.module.css"
export const AddItem = ({addNewItemToList}) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setTitle("");
        setPrice("");
        setDescription("");

        const newItem = {
            id: new Date(), title, price, description
        }

        addNewItemToList(newItem);

    }

    return (
        <form onSubmit={handleSubmit} className={styles.formWrapper}>
            <div className={styles.labelWrapper}>
                <label htmlFor="title" >Title: </label>
                <input id="title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className={styles.labelWrapper}>
                <label htmlFor="price">Price: </label>
                <input id="price" type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <div className={styles.labelWrapper}>
                <label htmlFor="description">Description: </label>
                <input id="description" type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <button type="submit">Add</button>
        </form>
    );
}