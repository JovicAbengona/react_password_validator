import React from "react";
import ReactDOM from "react-dom";
import Validator from "./Validator";
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { input_password: null };
    }

    onInputChange(event){
        this.setState({input_password: event.target.value});
    }

    render() {
        return <div>
            <label htmlFor="input_password">Password: </label>
            <input type="password" name="input_password" id="input_password" onChange={this.onInputChange.bind(this)}></input>
            <Validator input_password={this.state.input_password} />
        </div>;
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));