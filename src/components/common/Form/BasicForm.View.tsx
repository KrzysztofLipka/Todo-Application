import * as React from "react";
import Input from './Input'

interface IBasicFormProps {
    title: string;
    description: string;
    onTitleChange: (title: string) => void;
    onDescriptionChange: (description: string) => void;
    onConfirm: () => void;

}

const BasicForm: React.SFC<IBasicFormProps> = props => {

    return (
        <form className='basicForm'>
            <div className='form-group'>
                <Input
                    inputName={'title'}
                    value={props.title}
                    onChange={props.onTitleChange}
                    onConfirm={props.onConfirm}
                />

                <Input
                    inputName={'description'}
                    value={props.description}
                    onChange={props.onDescriptionChange}
                    onConfirm={props.onConfirm}
                />
            </div>
        </form>
    )
}

export default BasicForm;

