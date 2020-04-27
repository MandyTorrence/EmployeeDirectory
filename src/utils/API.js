import axios from "axios";

export default {
    getUsers: function () {

        return axios.get("https://jsonplaceholder.typicode.com/users");
    }
};