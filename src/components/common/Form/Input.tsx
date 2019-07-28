import * as React from "react";

interface InputProps {
    inputName: string;
    value: string;
    onChange: (value: string) => void;
    onConfirm: () => void;


}

const Input: React.SFC<InputProps> = props => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value);
    };

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.onConfirm();
        }
    };

    return (
        <div className='input-container'>
            <input type='text' name={props.inputName} value={props.value}
                onChange={handleChange}
                onKeyDown={handleEnter} autoComplete="off" required />
            <label htmlFor={props.inputName} className="label-name">

                <span className="input-name">{props.inputName}</span>
            </label>
        </div>
    )

}

export default Input;