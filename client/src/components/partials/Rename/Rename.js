import React, { Component } from "react";
import { Input, FormBtn } from "../Form";

class Rename extends Component {

    state = {
        title: this.props.title
    }

    handleInputChange = event => {
        const { title, value } = event.target;
        this.setState({
          title: value
        });
      };

    render() {
        return (
            <div className="rename">
                <Input 
                value={this.state.value}
                onChange={this.handleInputChange}
                name="rename"
                placeholder="New Title"
                />
          </div>
        )
    }
}

export default Rename;