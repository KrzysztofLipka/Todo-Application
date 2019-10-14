import * as React from "react";
import Input from '../MainInput'
import TextArea from '../Input'
import BasicFormViewModel from './BasicForm.ViewModel'
import { observer } from 'mobx-react'

interface IBasicFormProps {
    vm: BasicFormViewModel
}

@observer
class BasicForm extends React.Component<IBasicFormProps> {

    render() {
        return (
            <div className='form-group separated'>
                <Input
                    inputName={'title'}
                    value={this.props.vm.basicFormModel.title}
                    onChange={this.props.vm.handleTitleChange}
                    onConfirm={this.props.vm.handleConfirm}
                    switchAddTaskActive={this.props.vm.handleAddTaskCheckbox}
                    isAddCheckboxClicked={this.props.vm.basicFormModel.isAddCheckboxClicked}
                />
                <TextArea
                    inputName={'description'}
                    value={this.props.vm.basicFormModel.description}
                    onChange={this.props.vm.handleDescriptionChange}
                    onConfirm={this.props.vm.handleConfirm}
                />
            </div>

        )
    }

}

export default BasicForm;

