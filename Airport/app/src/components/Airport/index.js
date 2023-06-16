import { useEffect, useState } from 'react';

export const Airport = () => {
  const [data, setData] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
        const date = new Date();
      try {
        const response = await fetch(`
        https://www.airport-data.com/api/ap_info.json?iata=MUC
        `);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

 return (
    <div>
      {data ? (
        <ul>
          {data.map((item, id) => (
            <li key={id}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );

};



/*const dataArray = data.data.slice(0, 30)

export const Airport = () => {

    console.log(dataArray)

    return (
        <div>
            {dataArray.map((el, i)=> 
            <Card
            key={i}
            airlineName={el.airline.name} 
            departureGate={el.departure.gate} 
            estimatedTime={(new Date(el.departure.estimatedTime).toLocaleString())} 
            terminal={el.departure.terminal} />  
            )}   
        </div>
    )
}
*/