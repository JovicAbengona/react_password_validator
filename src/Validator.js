import React from "react";

const Validator = (props) => {
    let result = "";

    if(props.input_password != null && props.input_password.length < 4)
        result = <h3 className="ui red header">Password must at least be 4 characters</h3>

    return (
        <div>
            {result}
        </div>
    );
};

export default Validator;