import React, {Component} from "react";
import API from "../../../utils/API";
import PlayerBackground from "../../partials/PlayerBackground";
import VideoPlayer from "../../partials/VideoPlayer";
import "./video.css";

class ListPlayer extends Component {

    state = {
        currentVideo: {},
        results: [
            {
                url: "https://vimeo.com/163505789",
                videoId: "163505789",
                videoPlatform: "vimeo",
                title: "Meager Into Might"
            },
            {
                url: "https://www.youtube.com/watch?v=4yikpWtIFU8",
                videoId: "4yikpWtIFU8",
                videoPlatform: "youtube",
                title: "10 Funniest Squirrel Videos"
            }  
        ]
        
    }

    componentDidMount() {
        // API.getVideo(this.props.match.params.id)
        // .then(res => this.setState({ video: res.data }))
        // .catch(err => console.log(err));
    }

    render() {
        return (
            <div id="video-page-container">
                <PlayerBackground>
                    <VideoPlayer video={this.state.currentVideo} />
                </PlayerBackground>
                
            </div>
        )
    }

}

export default ListPlayer;
