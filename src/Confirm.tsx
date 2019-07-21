import * as React from "react";
import { throwStatement } from "@babel/types";
import './Confirm.css';


interface IProps {
    title: string;
    content: string;
    confirm: boolean;
    /*handleCancelClick: () => void;*/
}



//class Confirm extends React.Component<IProps>

const Confirm: React.SFC<IProps> = (props) =>
{
    
    const handleOnClick=()=>{
        console.log("clicked",props);
    }
    
    
        return(
            <div className="confirm">
                <button className="confirmationButton" onClick={handleOnClick}>Confirm</button>
                <div>{props.title}</div>
                <div>{props.content}</div>
                <div className={props.confirm ? "active" : "inactive"}>status</div>
                
            </div>
        );
    
  
}

export default Confirm;