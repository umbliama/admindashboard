import { observable, action, computed } from "mobx";
import axios from "axios";

class NewsStore {
    @observable news = [];

    @action async getAllNews() {
        try {
            const response = await axios.get("/api/news");
            this.news = response.data;
        } catch (error) {
            console.error(error);
        }
    }

    @action async deleteNews(newsId) {
        try {
            await axios.delete(`/news/delete/${newsId}`);
        } catch (error) {
            console.error(error);
        }
    }
}

const newsStore = new NewsStore();

export default newsStore;
