import React, { Component } from "react";
import API from "../../../utils/API";


class RecentlySaved extends Component {
    state = {
        videos: []
    };

    componentDidMount() {
        API.getPlaylist("5ba9a9edd21881b0e04bac95")
        .then(res => {
          console.log("array for 'all videos': ", res.data.videos);
          this.setState({
            videos: res.data.videos,
          });
        })
        .catch(err => console.log(err));
    };
    render() {
        return (
            <div className="recents-container">
                <h2>Recently Saved Videos</h2>
            </div>
        );
      }

}

// db call
// sort with the most recent videos at the front of the array
//limit 5

export default RecentlySaved;