import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../../utils/API";
import Header from "../../partials/Header";
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import "./EditPlaylist.css";

const SortableItem = SortableElement(({value}) =>
  <li>{value}</li>
);

const SortableList = SortableContainer(({videos}) => {
    return (
      <ul>
        {videos.map((value, index) => (
          <SortableItem key={`item-${index}`} index={index} value={value} />
        ))}
      </ul>
    );
  });

class EditPlaylist extends Component {

    state = {
        videos: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
      };
      componentDidMount = () => {
          
      };

      onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
          videos: arrayMove(this.state.videos, oldIndex, newIndex),
        });
      };
      render() {
        return (
            <div className="edit-container">
                < Header />
                <div className="reorder-container">
                    <h1>Edit Playlists Page</h1>
                    <SortableList videos={this.state.videos} onSortEnd={this.onSortEnd} />
                </div>
            </div>
            
        );
      }

    // state = {
    //     videos: []
    // }

    // componentDidMount = () => {
    // }

    // render() {
    //     return (
    //         <div>
    //            <h1>Edit Playlist Page</h1> 
    //         </div>
    //     )
    // }
}

export default EditPlaylist;