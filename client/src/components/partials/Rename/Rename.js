import React, { Component } from "react";
import Input from "../Form/Input.js";

class Rename extends Component {

    render() {
        return (
            <div>
                <Input 
                value= {this.props.title}
                name="rename"
                placeholder="New Title"
                />
            </div>
        )
    }
}

export default Rename;