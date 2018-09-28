import React, {Component} from "react";
import { Link } from "react-router-dom";
import API from "../../../utils/API";
import PlayerBackground from "../../partials/PlayerBackground";
import VideoPlayer from "../../partials/VideoPlayer";
import { ControlsContainer } from "../../partials/Controls";
import ReturnButton from "../../assets/images/return-icon.svg";
import "./video.css";

class Video extends Component {

    state = {
        video: {
            url: "https://www.youtube.com/watch?v=4yikpWtIFU8",
            videoId: "4yikpWtIFU8",
            videoPlatform: "youtube",
            title: "10 Funniest Squirrel Videos"
        }
    }

    componentDidMount() {
        this.loadVideo();
    }

    loadVideo = () => {
        API.getVideo(this.props.match.params.id)
        .then(res => this.setState({ video: res.data }))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div id="video-page-container">
                <PlayerBackground>
                    <VideoPlayer video={this.state.video} />
                    <ControlsContainer>
                        <Link to="/home">
                            <img className="controls-button" src={ReturnButton} />
                        </Link>
                    </ControlsContainer>
                </PlayerBackground>
                
            </div>
        )
    }

}

export default Video;
