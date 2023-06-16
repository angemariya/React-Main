import "./Days.css";
import { Day } from "./Day";

const days = [
    "пн", 
    "вт", 
    "ср", 
    "чт", 
    "пт", 
    "сб", 
    "вс"
];
export const Days = ({ onDaySelected }) => {
    return <div className="Days">
        {days.map((day) => {
            return <Day 
                key={day}
                onClick={() => onDaySelected(day)}
            >
                {day}
            </Day>;
        })}
    </div>;
}