import { useState } from "react"
import { TodoItem } from "../TodoItem";

export const ToDo = () => {
    const [todos] = useState([
        {id: 1, title: 'deal #143'},
        {id: 2, title: 'deal #144'},
        {id: 3, title: 'deal #145'},
        {id: 4, title: 'deal #146'},
        {id: 5, title: 'deal #147'}
      ]);

return (
    <ul>
        {todos.map((el)=>
            (<TodoItem key={el.id} {...el}/>)
        )}
    </ul>
)
}
