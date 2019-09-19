import UsersStore from "./UsersStore";
import NewsStore from "./NewsStore";

class RootStore {
    constructor() {
        this.userStore = new UsersStore(this);
        this.todoStore = new NewsStore(this);
    }
}

const rootStore = new RootStore();
export default rootStore;
