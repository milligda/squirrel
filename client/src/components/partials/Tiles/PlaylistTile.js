import React, { Component } from "react";
import { Link } from "react-router-dom";
import { OptionsContainer, OptionsIcon, EditIcon, DeleteIcon } from "../Controls";
import "./tiles.css";


class PlaylistTile extends Component {

  state = {
    optionsVisible: false,
    isCreateTile: null,
    isAllVideosTile: null
  }

  componentDidMount = () => {
    this.checkPlaylistType();
  }

  checkPlaylistType = () => {
    switch (this.props.title) {
      case "All Videos":
        this.setState({
          isAllVideosTile: true,
          isCreateTile: false
        });
        break;
      case "Create New Playlist":
        this.setState({
          isCreateTile: true,
          isAllVideosTile: false
        })
        break;
      default:
        this.setState({
          isAllVideosTile: false,
          isCreateTile: false
        })
    }

  }

  expandContainer = () => {

    console.log("we are here");

    this.setState({
      optionsVisible: !this.state.optionsVisible
    });
  }

  render () {

    const playlistUrl = `/playlist/${this.props._id}`;

    return (
      <div className="playlist-tile-container">
  
        <div className="playlist-tile">
          <Link to={playlistUrl}>
            <div className="playlist-tile-content">
  
              <h3 className="playlist-tile-title">{this.props.title}</h3>
  
            </div>
          </Link>
  
          {!this.state.isCreateTile ? 
            <OptionsIcon onClick={() => this.expandContainer()} /> : ""
          }
        </div>


        {!this.state.isCreateTile ? 
          <OptionsContainer>
            <EditIcon 
              playlistId={this.props._id}
            />

            {!this.state.isAllVideosTile ?
              <DeleteIcon
                onClick={() => this.props.deletePlaylist(this.props._id)}
              />
              : ""
            }
          </OptionsContainer>
          : ""
        }
      </div>
    );
  }
};

export default PlaylistTile;
