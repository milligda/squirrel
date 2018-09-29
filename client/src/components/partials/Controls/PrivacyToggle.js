import React, { Component } from "react";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import "./controls.css";

class PrivacyToggle extends Component {
    state = {
      checkedA: true,
      checkedB: true,
    };
  
    handleChange = name => event => {
      this.setState({ [name]: event.target.checked });
    };
  
    render() {
      return (
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedA}
                onChange={this.handleChange('checkedA')}
                value="checkedA"
              />
            }
            label="Private"
          />
        </FormGroup>
      );
    }
  }
  
  export default PrivacyToggle;