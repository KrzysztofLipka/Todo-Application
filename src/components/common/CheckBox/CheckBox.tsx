import * as React from "react";
import { render } from "react-dom";

interface InputProps {
    onClickDoneCheckbox: () => void;
}

const CheckBox: React.SFC<InputProps> = (props) => {
    return (
        <div className="checkbox-container">
            <label className="check">
                <input type="checkbox" onChange={props.onClickDoneCheckbox} />
                <div className="box"></div>
            </label>
        </div>
    );
}
export default CheckBox;