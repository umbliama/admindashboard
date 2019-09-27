import { observable, action, computed } from "mobx";
import axios from "axios";

class UsersStore {
    @observable user = [];
    @observable userForm = {
        name: null,
        email: null,
        password: null
    };

    @observable editUserForm = {
        name: null,
        email: null,
        password: null
    };

    @action async getUserInfo() {
        try {
            const response = await axios.get("/api/users");
            this.user = response.data;
        } catch (error) {
            console.error(error);
        }
    }

    @action async deleteUser(userId) {
        try {
            await axios.delete(`/users/delete/${userId}`);
        } catch (error) {
            console.error(error);
        }
    }

    @action async createUser(name, email, password) {
        try {
            await axios.post(
                "/users/create",
                { name, email, password },
                {
                    headers: {
                        "X-CSRF-TOKEN": window.token
                    }
                }
            );
        } catch (error) {
            console.error(error);
        }
    }

    @action async updateUser(name, email, password, userId) {
        try {
            await axios.post(
                `/users/update/${userId}`,
                { name, email, password },
                {
                    headers: {
                        "X-CSRF-TOKEN": window.token
                    }
                }
            );
        } catch (error) {
            console.error(error);
        }
    }
}

const usersStore = new UsersStore();

export default usersStore;
