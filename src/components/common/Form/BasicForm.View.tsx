import * as React from "react";

interface IBasicFormProps {
    title: string;
    description: string;
    onTitleChange: (title: string) => void;
    onDescriptionChange: (description: string) => void;
    onConfirm: () => void;

}

const BasicForm: React.SFC<IBasicFormProps> = props => {

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onTitleChange(e.currentTarget.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onDescriptionChange(e.currentTarget.value);
    };

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.onConfirm();
        }
    };

    return (
        <form className='basicForm'>
            <div className='form-group'>
                <div className='input-container'>
                    <input type='text' name='title' value={props.title}
                        onChange={handleTitleChange}
                        onKeyDown={handleEnter} autoComplete="off" required />
                    <label htmlFor="title" className="label-name">

                        <span className="input-name">Title</span>
                    </label>
                </div>

                <div className='input-container'>
                    <input type='text' name='description'
                        value={props.description}
                        onChange={handleDescriptionChange}
                        onKeyDown={handleEnter} autoComplete="off" required />
                    <label htmlFor="description" className="label-name">
                        <span className="input-name">Description</span>
                    </label>
                </div>
            </div>
        </form>
    )
}

export default BasicForm;

