import "./label.css"
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { FilterPart, FilterField } from "styled/styled-filter";

export const Filter = ({ name, value, onChange, type, label }) => {
    const uniqueID = nanoid();

    return <FilterPart>
    <label className="label" htmlFor={uniqueID}>{label}</label>
    <FilterField id={uniqueID} name={name} value={value} onChange={onChange} type={type}/>
    </FilterPart>
}

Filter.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }