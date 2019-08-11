import * as React from "react";

interface InputProps {
    inputName: string;
    value: string;
    onChange: (value: string) => void;
    onConfirm: () => void;
    switchAddTaskActive: () => void;

    isAddCheckboxClicked: boolean;
}

const Input: React.SFC<InputProps> = props => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value);
    };

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            props.onConfirm();
        }
    };

    const handleAddClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.switchAddTaskActive();
    };



    return (

        <div className='input-container'>
            <input className="message" type='text'
                name={props.inputName}
                value={props.value}
                onChange={handleChange}
                onKeyDown={handleEnter}
                placeholder="Add Title"
                autoComplete="off" />
        </div>

    )

}

export default Input;