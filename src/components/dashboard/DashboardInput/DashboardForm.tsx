import React, {MouseEvent} from 'react';
import '../Dashboard.css';

interface ITaskParameters {
    

}

interface IProps {
    //onInputChange: void,
    //inputValue: string,
    onChangeTitle(title: string): void,
    onChangeDescription(description: string): void,
    onSubmit(): void,
    title: string
    description: string

}



const DashboardForm: React.SFC<IProps> = (props) => {

        const handleClick = (e: any) => {
            e.preventDefault();
            props.onSubmit();
        }

        const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
            props.onChangeTitle(e.currentTarget.value)
        }

        const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
            props.onChangeDescription(e.currentTarget.value)
        }

        return(
            <form className='dashboard-form' >
                <input placeholder='enter taks name...'
               
                onChange = { handleChangeTitle }
                />
                <input placeholder='enter task description'
                
                onChange = { handleChangeDescription }
                />
                <button onClick={(e) => handleClick(e)}>Add Task</button>
            </form>
        )
        
    
}

export default DashboardForm;