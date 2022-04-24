
type Checkbox = {
    name:string,
}

export type Data = {
    id:string,
    title: string,
    checkbox: Checkbox[]
}

export type CheckBoxSectionProps = {
    data: Data,
    // isChecked?:boolean,
    // handleChange?:(event:any)=>void;
}

export type CheckboxProps = {
    name: string,
    checkedState?:boolean,
    handleOnChange:(event:any)=>void;
    disabled?:boolean
}