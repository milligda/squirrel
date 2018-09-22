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
    // gets all collections
    getCollections: function() {
        return axios.get("/api/collections");
    },
    // get collection based on id
    getCollection: function(userId) {
        return axios.get("/api/collections/" + userId);
    },
    // deletes the collection based on id
    deleteCollection: function(userId) {
        return axios.delete("/api/collections/" + userId);
    },
    getUserStatus: function() {
        return axios.get(`/api/users/status`);
    },
    logout: function() {
        return axios.get(`/api/users/logout`);
    }
};