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
    // get playlist data based on playlist ID
    getPlaylistData: function(playlistId) {
        return axios.get("/api/playlists/data/" + playlistId);
    },
    // create a new playlist
    createPlaylist: function(playlistData) {
        return axios.post("/api/playlists/new", playlistData);
    },
    // deletes the playlist based on id
    deletePlaylist: function(userId) {
        return axios.delete("/api/playlists/" + userId);
    },
    // determines if the user is logged in or not
    getUserStatus: function() {
        return axios.get(`/api/users/status`);
    },
    // gets the user's data and playlists
    getUserData: function(userId) {
        return axios.get(`/api/users/data/` + userId);
    },
    setCookie: function() {
      return axios.get(`/api/users/cookie`);
    },
    logout: function() {
        return axios.get(`/api/users/logout`);
    },
    getVideo: function(videoId) {
        return axios.get("/api/videos/" + videoId);
    },
    // deletes the video from all playlists 
    deleteVideo: function(videoId) {
        return axios.put(`/api/videos/delete/${videoId}`);
    },
    // removes the video from one playlist
    removeVideo: function(videoId, playlistId) {
        return axios.put(`/api/videos/remove/${videoId}/${playlistId}`);
    },
    saveVideo: function(userId, videoObj) {
        return axios.post(`/api/videos/save/${userId}`, videoObj);
    }


};