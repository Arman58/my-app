import React, {useContext} from "react";
import CheckBoxSection from "./CheckBoxSection";
import {CheckboxContext} from "../context/CheckboxContext";


const Main = () => {
    const {dataItems} = useContext(CheckboxContext)
    console.log(dataItems,"dataITEMS ")
    return (
        <div className="my-modal">
            <h1> My Startup Progress</h1>
            {dataItems && dataItems.map((item) => <CheckBoxSection data={item} key={item.id}/>
            )}
        </div>
    )
}

export default Main