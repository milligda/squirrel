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
<<<<<<< HEAD
    // gets all Playlists
    getPlaylists: function() {
        return axios.get("/api/Playlists");
    },
    // get Playlist based on id
    getPlaylist: function(userId) {
        return axios.get("/api/Playlists/" + userId);
    },
    // deletes the Playlist based on id
    deletePlaylist: function(userId) {
        return axios.delete("/api/Playlists/" + userId);
=======
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
>>>>>>> 97fe377abbc7e0c6999f196f02ed050146751f1b
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