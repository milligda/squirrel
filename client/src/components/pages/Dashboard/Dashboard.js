import React from "react";
import PlaylistList from "../Playlist/PlaylistList";
import PlaylistListItem from "../Playlist/PlaylistListItem";

class Dashboard extends Component {

    state = {
        Playlists: []
    }

    componentDidMount() {
        this.loadPlaylists()
    }

    loadPlaylists = () => {
        
        API.getPlaylists()
        .then(data => data.json())
        .then(res => this.setState({ Playlists: res.data }))
        .catch(err => console.log(err));

        console.log(res.data);
    };

    render() {
        return (
            <div>
                <h1>Welcome to the Squirrel Home Page!</h1>

                {/* <div>
                    {/* Recently saved videos go here */}
                {/* </div> */}

                <div>
                <PlaylistList>
                {this.state.Playlists.map(Playlist => {
                    return (
                    <PlaylistListItem
                        key={Playlist.userId}
                        description={Playlist.description}
                        title={Playlist.title}
                        videos={Playlist.videos}
                    />
                    );
                })}
                </PlaylistList>
                </div>
            </div>
        );
    }
}

export default Dashboard;