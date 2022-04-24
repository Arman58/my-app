import React, {FC, useEffect, useState} from "react";
import Checkbox from "../Buttons/Checkbox";
import {CheckBoxSectionProps} from "../../Types/type";
import "./CheckBoxSection.scss"
import {FaCheck} from "@react-icons/all-files/fa/FaCheck";
import {randomText} from "../../Services/random";

const CheckBoxSection: FC<CheckBoxSectionProps> = ({data}) => {
    const [accept, setAccept] = useState(false)
    const [checkedState, setCheckedState] = useState(new Array(data.checkbox.length).fill(false));
    const [isDisable, setIsDisable] = useState(false)

    useEffect(() => {
        if (accept) {
            randomText().then(r => alert(r.text))
        }
    }, [accept])

    const handleOnChange = (position: number) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        if (data.title === "Foundation") {
            updatedCheckedState.every(item => item === true) ? setAccept(true) : setAccept(false)
            if (updatedCheckedState) {
                setIsDisable(true)
            }
        }
        setCheckedState(updatedCheckedState);
    }


    return (
        <div className="my-modal">
            <div className="title">
                <div className="title-id">{data.id}</div>
                <h1>{data.title}</h1>
                <h1 style={{marginLeft: "20px"}}>{accept && <FaCheck/>}  </h1>
            </div>
            {data.checkbox && data.checkbox.map((item, index) =>
                <Checkbox
                    name={item.name}
                    key={index}
                    handleOnChange={() => handleOnChange(index)}
                    checkedState={checkedState[index]}
                    disabled={isDisable}
                />
            )}
        </div>
    )
}

export default CheckBoxSection