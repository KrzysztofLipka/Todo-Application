import * as React from "react";

interface IBasicFormProps {
    title: string;
    description: string;
    onTitleChange: (title: string) => void;
    onDescriptionChange: (description: string) => void;
    onConfirm: () => void;

}

const BasicForm: React.SFC<IBasicFormProps> =  props => {
    
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onTitleChange(e.currentTarget.value);
      };

      const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onDescriptionChange(e.currentTarget.value);
      };

      const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
          if(e.key==='Enter'){
            props.onConfirm();
          }
      };

    return(
        <form className='basicForm'>
            <div className='form-group'>
                <input type='text' id='title' value = {props.title} 
                    onChange={handleTitleChange} 
                    onKeyDown={handleEnter}/>
                <input type='text' id='description' 
                    value = {props.description} 
                    onChange={handleDescriptionChange}/>
            </div>
        </form>
    )
}

export default BasicForm;

