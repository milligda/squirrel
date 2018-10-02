import React, { Component } from "react";
import API from "../../../utils/API";
import GridContainer from "../Tiles/GridContainer.js"
import VideoTile from "../Tiles/VideoTile.js"


class RecentlySaved extends Component {
    state = {
        videos: []
    };

    componentDidMount() {
        API.getPlaylist("5ba9a9edd21881b0e04bac95")
        .then(res => {
          console.log("array for 'all videos': ", res.data.videos);
          this.setState({
            videos: res.data.videos.slice(0, 4),
          });
        })
        .catch(err => console.log(err));
    };
    render() {
        return (
            <div className="recents-container">
                <h2>Recently Saved Videos</h2>
                <GridContainer>
                    {this.state.videos.map(video => (
                        <VideoTile 
                            isOwner={this.state.isOwner}
                            imageUrl={video.imageUrl}
                            title={video.title}
                            key={video._id}
                            _id={video._id}
                            removeVideo={this.removeVideo}
                        />
                    ))}
                </GridContainer>
            </div>
        );
      }

}

// db call
// sort with the most recent videos at the front of the array
// limit 5

export default RecentlySaved;