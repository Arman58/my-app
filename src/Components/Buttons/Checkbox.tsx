import React, {FC, useContext, useState} from "react";
import "./Checkbox.scss"
import {CheckboxProps} from "../../Types/type";
import {CheckboxContext} from "../../context/CheckboxContext";



const Checkbox: FC<CheckboxProps> = ({name,handleOnChange,checkedState,disabled}) => {
    return (
        <div>
            <input type="checkbox" id={name} name={name}
                  onChange={handleOnChange} checked={checkedState} disabled={disabled} />
            <label htmlFor={name}>{name}</label>
        </div>
    )
}

export default Checkbox;