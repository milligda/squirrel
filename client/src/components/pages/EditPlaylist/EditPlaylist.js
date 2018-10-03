import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../../utils/API";
import Header from "../../partials/Header";
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import "./EditPlaylist.css";
import BreadcrumbMenu from "../../partials/BreadcrumbMenu";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Input, FormBtn} from "../../partials/Form"
import Rename from "../../partials/Rename/Rename.js"
import GridContainer from "../../partials/Tiles/PlaylistGridContainer";
import { SaveIcon } from "../../partials/Controls";
import { EventEmitter } from "events";



const SortableItem = SortableElement(({value}) =>
  <li className="sortable-item">{value}</li>
);

const SortableList = SortableContainer(({videos}) => {
    return (
      <div>
        <h2>Drag to Reorder</h2>
        <ul>
          {videos.map((value, index) => (
            <SortableItem key={`item-${index}`} index={index} value={value} />
          ))}
        </ul>
      </div>
    );
  });


class EditPlaylist extends Component {

    state = {
        videos: ["Item 1", "Item 2", "Item 3"],
        title: null
      };

      componentDidMount() {
        API.getPlaylist(this.props.match.params.id)
        .then(res => {
          console.log("get videos: ", res.data);
          this.setState({
            videos: res.data.videos.map((o) => o.title),
            title: res.data.title,
            private: res.data.private
          });
          console.log("map: ", this.state.videos)
        })
        .catch(err => console.log(err));
      };

      handleChange = name => event => {
        this.setState({ [name]: event.target.checked })
        console.log("Private? :", this.state.private);
      };

      onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
          videos: arrayMove(this.state.videos, oldIndex, newIndex),
        });
      };

      handleFormSubmit = event => {
        const storeRename = {
          title: this.state.title,
        }
      }
      
      render() {
        const isAllVideos = this.state.title;

        return (
          
            <div className="edit-container">
                < Header />
                <div className="reorder-container container">
                    <h1>Edit "{this.state.title}" Playlist</h1>

                <div className="privacy-toggle">
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={this.state.private}
                          onChange={this.handleChange('private')}
                          value="private"
                        />
                      }
                      label="Private"
                    />
                  </FormGroup>
                </div>

                <SaveIcon onClick={this.handleFormSubmit} />

                
                <GridContainer>
                  {(isAllVideos !== "All Videos") && (<Rename title={this.state.title}/>)}

                  <SortableList videos={this.state.videos} onSortEnd={this.onSortEnd} />

                </GridContainer>
                </div>
            </div>
            
        );
      }
}

export default EditPlaylist;