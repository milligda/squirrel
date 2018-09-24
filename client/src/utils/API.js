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
    },
    getUserStatus: function() {
        return axios.get(`/api/users/status`);
    },
    logout: function() {
        return axios.get(`/api/users/logout`);
    }
};