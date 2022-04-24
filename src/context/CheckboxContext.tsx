import {FC, ReactNode, createContext, useState, useCallback} from 'react';
import {data} from "../Data/data";
import {Data} from "../Types/type";


type CheckboxContextType = {
    isChecked?: boolean;
    setIsChecked?: (isChecked: boolean) => void;
    dataItems: Data[],
    // handleOnChange: (event: any) => void;
};

const pass = () => {
};
export const CheckboxContext = createContext<CheckboxContextType>({
    isChecked: false,
    setIsChecked: pass,
    dataItems: [],
    // handleOnChange: pass
});

type CheckboxProviderProps = {
    children?: ReactNode;
};

export const CheckboxProvider: FC<CheckboxProviderProps> = ({children}) => {
    const [isChecked, setIsChecked] = useState(false);
    const dataItems = data.map((item) => item)
    const [accept, setAccept] = useState(false)

    const [checkedState, setCheckedState] = useState(
        dataItems.map((item) => new Array(item.checkbox.length).fill(false))
    );


const allChecked = checkedState.map((item) => item.every((i)=> i === true))
    console.log(allChecked, "checkedState")


    // const handleOnChange = (position: number) => {
    //     const updatedCheckedState = checkedState.map((item, index) =>
    //         index === position ? !item : item
    //     );
    //
    //     // if (data.title === "Foundation") {
    //     updatedCheckedState.every(item => item === true) ? setAccept(true) : setAccept(false)
    //     // }
    //
    //     setCheckedState(updatedCheckedState);
    //
    // }


    const value = {
        isChecked,
        setIsChecked,
        dataItems,
        // handleOnChange
    };

    return <CheckboxContext.Provider value={value}>{children}</CheckboxContext.Provider>;
};
