import "./label.css"
import { nanoid } from "nanoid";

export const Filter = ({ name, value, onChange, type, label}) => {
    const uniqueID = nanoid();

    return <>
    <label className="label" htmlFor={uniqueID}>{label}</label>
    <input id={uniqueID} name={name} value={value} onChange={onChange} type={type}/>
    </>
}