import * as React from "react";

interface InputProps {
    inputName: string;
    value: string;
    onChange: (value: string) => void;
    onConfirm: () => void;
    isValid?: boolean;
    validationMessage?: string;

}

const TextArea: React.SFC<InputProps> = props => {

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange(e.currentTarget.value);
    };

    const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            props.onConfirm();
        }
    };




    return (
        <div className={props.inputName}>
            {/*<label htmlFor="description-input" className="description-label">{props.inputName}</label>*/}
            <textarea className="description-input"
                name={props.inputName}
                value={props.value}
                onChange={handleChange}
                onKeyDown={handleEnter}
                autoComplete="off"
                placeholder="Add description"
            />
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

export default TextArea;