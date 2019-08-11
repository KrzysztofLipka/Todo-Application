import * as React from "react";
import Input from './MainInput'
import TextArea from './Input'

interface IBasicFormProps {
    title: string;
    description: string;
    onTitleChange: (title: string) => void;
    onDescriptionChange: (description: string) => void;
    onConfirm: () => void;

    switchAddTaskActive: () => void;
    isAddCheckboxClicked: boolean;


}

const BasicForm: React.SFC<IBasicFormProps> = props => {

    return (

        <div className='form-group separated'>
            <Input
                inputName={'title'}
                value={props.title}
                onChange={props.onTitleChange}
                onConfirm={props.onConfirm}
                switchAddTaskActive={props.switchAddTaskActive}
                isAddCheckboxClicked={props.isAddCheckboxClicked}
            />

            <TextArea
                inputName={'description'}
                value={props.description}
                onChange={props.onDescriptionChange}
                onConfirm={props.onConfirm}


            />
        </div>

    )
}

export default BasicForm;

