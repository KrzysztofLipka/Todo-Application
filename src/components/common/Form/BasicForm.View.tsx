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

        const subtasks = this.props.vm.basicFormModel.subtaskList
            ? this.props.vm.basicFormModel.subtaskList.map((subtask: string) =>
                <li key={subtask}>{subtask}</li>
            ) : null;
        return (
            <div className='form-group'>
                <Input
                    inputName={'title-input'}
                    value={this.props.vm.basicFormModel.title}
                    onChange={this.props.vm.handleTitleChange}
                    onConfirm={this.props.vm.handleConfirmForm}
                    switchAddTaskActive={this.props.vm.handleAddTaskCheckbox}
                    isAddCheckboxClicked={this.props.vm.basicFormModel.isAddCheckboxClicked}
                    placeholderText={'Add Title'}
                    isValid={this.props.vm.basicFormModel.isTitleValid}
                />
                <TextArea
                    inputName={'description-input'}
                    value={this.props.vm.basicFormModel.description}
                    onChange={this.props.vm.handleDescriptionChange}
                    onConfirm={this.props.vm.handleConfirmForm}
                    isValid={this.props.vm.basicFormModel.isDescritpionValid}
                />

                <Input
                    inputName={'date-input'}
                    value={this.props.vm.basicFormModel.date}
                    onChange={this.props.vm.handleDateChange}
                    onConfirm={this.props.vm.handleConfirmForm}
                    switchAddTaskActive={this.props.vm.handleAddTaskCheckbox}
                    isAddCheckboxClicked={this.props.vm.basicFormModel.isAddCheckboxClicked}
                    placeholderText={'Add Due Date'}
                    isValid={this.props.vm.basicFormModel.isDateValid}
                />

                <Input
                    inputName={'subtask-input'}
                    value={this.props.vm.basicFormModel.subtask}
                    onChange={this.props.vm.handleSubtaskChange}
                    onConfirm={this.props.vm.handleConfirmSubtaskInput}
                    switchAddTaskActive={this.props.vm.handleAddTaskCheckbox}
                    isAddCheckboxClicked={this.props.vm.basicFormModel.isAddCheckboxClicked}
                    placeholderText={'Add Subtask and click Enter'}
                />

                <ul>{subtasks}</ul>





                <button
                    onClick={this.props.vm.handleSubmitForm}
                    disabled={!this.props.vm.basicFormModel.isFormValid}
                > Add Task </button>
            </div>

        )
    }

}

export default BasicForm;

