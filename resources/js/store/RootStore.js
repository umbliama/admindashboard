import UsersStore from "./UsersStore";
import NewsStore from "./NewsStore";

class RootStore {
    constructor() {
        this.userStore = new UsersStore(this);
        this.userStore = new NewsStore(this);
    }
}
export const rootStore = new RootStore();
