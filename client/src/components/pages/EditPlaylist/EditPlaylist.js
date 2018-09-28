import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../../utils/API";
import Header from "../../partials/Header";
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import "./EditPlaylist.css";
import BreadcrumbMenu from "../../partials/BreadcrumbMenu";

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

      componentDidMount() {
          API.getPlaylist(this.props.match.params.id)
        .then(res => {
          console.log("get videos: ", res.data);
          this.setState({
            videos: res.data.videos,
            title: res.data.title
          });
        })
        .catch(err => console.log(err));
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

                    < BreadcrumbMenu title={this.state.title}/>

                    <SortableList videos={this.state.videos} onSortEnd={this.onSortEnd} />
                </div>
            </div>
            
        );
      }
}

export default EditPlaylist;