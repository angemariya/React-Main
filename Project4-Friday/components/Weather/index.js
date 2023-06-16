import { useEffect, useState } from "react"

export const Weather = () => {
    const [ latitude, setLatitude ] = useState("52.52");
    const [ longitude, setLongitude ] = useState("13.41");
    const [ temperature, setTemperature ] = useState("");

    useEffect(() => {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setTemperature(json.hourly.temperature_2m[json.hourly.temperature_2m.length - 1]);
            });
    }, [latitude, longitude]);

    return <>
        <input
            placeholder="Latitude"
            value={latitude}
            onChange={(evt) => setLatitude(evt.target.value)}
        />
        <input 
            placeholder="Longitude" 
            value={longitude}
            onChange={(evt) => setLongitude(evt.target.value)}
        /> <br />

        Latitude:&nbsp;{latitude}. <br />
        Longitude:&nbsp;{longitude}. <br />
        Temperature:&nbsp;{temperature}.
    </>;
}