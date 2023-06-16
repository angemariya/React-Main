import {useEffect, useState} from 'react';

export const Button = () => {
    const [count, setCount] = useState(0);

    useEffect(
        ()=>console.log(count),
        [count]
    )

    return (
    <div>
        <p>{count}</p>
        <button onClick={()=> {
            setCount(count+1);
        }}>Жмак</button>
    </div>
    )
};