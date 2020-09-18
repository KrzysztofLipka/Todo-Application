import * as React from "react";

interface InputProps {
    inputName: string;
    value: string;
    onChange: (value: string) => void;
    onConfirm: () => void;
    isAddCheckboxClicked: boolean;
    placeholderText: string;
    isValid?: boolean,
    validationMessage?: string
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

    return (
        <div className={props.inputName}>
            <input className="message" type='text'
                name={props.inputName}
                value={props.value}
                onChange={handleChange}
                onKeyDown={handleEnter}
                placeholder={props.placeholderText}
                autoComplete="off" />

            {!props.isValid &&
                <div className='validationMessage'>
                    {props.validationMessage
                        ? props.validationMessage
                        : 'Invalid Input'
                    }
                </div>
            }
        </div>
    )

}

export default Input;