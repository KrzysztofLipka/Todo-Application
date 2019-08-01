import * as React from "react";

interface InputProps {
    inputName: string;
    value: string;
    onChange: (value: string) => void;
    onConfirm: () => void;
    switchAddTaskActive: () => void;

    isAddCheckboxClicked: boolean;
}

const MainInput: React.SFC<InputProps> = props => {

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

        <div className='parent'>
            <input className="cbox" type="checkbox" onChange={handleAddClick} />
            <label htmlFor="cbox" className="add">{props.isAddCheckboxClicked ?
                'Click enter for submit' : 'Add Task'}</label>
            <input className="message" type='text'
                name={props.inputName}
                value={props.value}
                onChange={handleChange}
                onKeyDown={handleEnter}
                autoComplete="off" />
        </div>

    )

}

export default MainInput;