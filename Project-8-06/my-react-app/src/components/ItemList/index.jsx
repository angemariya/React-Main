import { useState, useEffect } from "react"
import { Item } from "../Item";

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

    return (
        <div>
            {itemList.map(el=>{
                <Item key={el.id} {...el} />
            })
            }
        </div>
    )
}