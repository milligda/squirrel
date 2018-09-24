import React, {Component} from "react";
import { Link } from "react-router-dom";
import API from "../../../utils/API";
import PlayerBackground from "../../partials/PlayerBackground";
import VideoPlayer from "../../partials/VideoPlayer";
import { ControlsContainer, NextVideoButton } from "../../partials/Controls";
import ReturnButton from "../../assets/images/return-icon.svg";
import "./listPlayer.css";

class ListPlayer extends Component {

    state = {
        currentVideo: {},
        nextVideo: {},
        videoPlaying: 0,
        playingLastVideo: false,
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
            },
            {
                url: "https://www.nytimes.com/video/us/politics/100000006123538/trump-kavanaugh-accusations.html?playlistId=100000003890188&region=video-grid&version=video-grid-thumbnail&contentCollection=Times+Video&contentPlacement=0&module=recent-videos&action=click&pgType=Multimedia&eventName=video-grid-click",
                videoId: "100000006123538",
                videoPlatform: "nytimes",
                title: "Trump Calls Kavanaugh Accusations Totally Political"
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
        this.setVideo(0);

        // API.getPlaylist(this.props.match.params.id)
        // .then(res => this.setState({ results: res.data }))
        // .catch(err => console.log(err));
    }

    setVideo = (videoNumber) => {
        // set the variables
        let lastVideo = false;
        let nextVideo = {};

        // if the current video number is the last item in the results array, set lastVideo to true
        if (videoNumber + 1 > this.state.results.length - 1) { 
            lastVideo = true;
        }

        // if this is not the last video, store the next Video
        if (!lastVideo) {
            nextVideo = this.state.results[videoNumber + 1];
        }

        // update the state
        this.setState({
            currentVideo: this.state.results[videoNumber],
            playingLastVideo: lastVideo,
            nextVideo: nextVideo
        });

        console.log(this.state);
    };

    nextVideo = () => {

        let videoNum = this.state.videoPlaying + 1;

        // update the VideoPlaying number
        this.setState({
            videoPlaying: videoNum
        });

        // update the Current Video using the setVideo method
        this.setVideo(videoNum);
    }

    render() {

        let nextButton;

        if (!this.state.playingLastVideo) {
            nextButton = <NextVideoButton onClick={() => this.nextVideo()} />;
        } else {
            nextButton = "";
        }


        return (
            <div id="video-page-container">
                <PlayerBackground>
                    <VideoPlayer video={this.state.currentVideo} />
                    <ControlsContainer>
                        <Link to="/home">
                            <img className="controls-button" src={ReturnButton} />
                        </Link>

                        {nextButton}
                    </ControlsContainer>
                </PlayerBackground>
                
            </div>
        )
    }

}

export default ListPlayer;
