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
    getUserStatus: function() {
        return axios.get(`/api/users/status`);
    },
    logout: function() {
        return axios.get(`/api/users/logout`);
    }
};