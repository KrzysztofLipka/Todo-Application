import * as React from "react";

interface InputProps {
    inputName: string;
    value: string;
    onChange: (value: string) => void;
    onConfirm: () => void;
    inputHeight?: string;

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
        <div className='textarea-container'>
            {/*<label htmlFor="description-input" className="description-label">{props.inputName}</label>*/}
            <textarea className="description-input"
                name={props.inputName}
                value={props.value}
                onChange={handleChange}
                onKeyDown={handleEnter}
                autoComplete="off"
                placeholder="Add description"
                style={{ height: props.inputHeight }}

            />

        </div>
    )

}

export default TextArea;