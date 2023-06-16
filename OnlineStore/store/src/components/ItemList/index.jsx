import { useState, useEffect } from "react"
import { Item } from "../Item";
import { AddItem } from "../AddItem";

export const ItemList = () => {
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch(`https://dummyjson.com/products?limit=10`)
            const data = await response.json()
            setItemList (data.products)
           
          } catch (error) {
            console.error('Error fetching user:', error)
          }
        }
    
        fetchProducts()
      }, []
    );

    const addNewItemToList = (newItem) => {
      setItemList([...itemList, newItem])
    }

    return (
        <div>
            <AddItem addNewItemToList={addNewItemToList}/>
            {itemList.map(el=><Item key={el.id} {...el} />)}
        </div>
    )
}