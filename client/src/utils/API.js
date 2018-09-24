import axios from "axios";

export default {
    // create a user in the database
    createUser: function(userData) {
        return axios.post("/api/users/signup", userData);
    },
    // login the user
    loginUser: function(userData) {
        return axios.post("/api/users/login", userData);
    },
    // gets all playlists
    getPlaylists: function() {
        return axios.get("/api/playlists");
    },
    // get playlist based on id
    getPlaylist: function(userId) {
        return axios.get("/api/playlists/" + userId);
    },
    // deletes the playlist based on id
    deletePlaylist: function(userId) {
        return axios.delete("/api/playlists/" + userId);
    },
    getUserStatus: function() {
        return axios.get(`/api/users/status`);
    },
    logout: function() {
        return axios.get(`/api/users/logout`);
    },
    getVideo: function(videoId) {
        return axios.get("/api/videos/" + videoId);
    }
};