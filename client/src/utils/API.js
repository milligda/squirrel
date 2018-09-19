import axios from "axios";

export default {
    // create a user in the database
    createUser: function(userData) {
        return axios.post("/api/users", userData);
    }
};