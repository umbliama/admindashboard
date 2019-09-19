import { observable, action, computed } from "mobx";
import axios from "axios";

class UsersStore {
    @observable user = [];

    @action async getUserInfo() {
        try {
            const response = await axios.get("/api/user");
            this.user = response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

const usersStore = new UsersStore();

export default usersStore;
