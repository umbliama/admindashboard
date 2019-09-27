import React, { Component } from "react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

import "./NewsList.scss";

@inject("newsStore")
@observer
class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.newsStore.getAllNews();
    }
    deleteNews(newsId) {
        this.props.newsStore.deleteNews(newsId);
    }
    render() {
        const store = this.props.newsStore;

        return (
            <section className="news-list">
                <div className="container">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="table__cell">Id</td>
                                <td className="table__cell">User Id</td>
                                <td className="table__cell">Created</td>
                                <td className="table__cell">Updated</td>
                                <td className="table__cell">Title</td>
                                <td className="table__cell">Body</td>
                                <td className="table__cell">Published</td>
                                <td className="table__cell">Add news</td>
                            </tr>
                            {store.news.map(news => (
                                <tr key={news.id}>
                                    <td className="table__cell">{news.id}</td>
                                    <td className="table__cell">
                                        <p className="news-list__text">
                                            {" "}
                                            {news.newsId}
                                        </p>
                                    </td>
                                    <td className="table__cell">
                                        <p className="news-list__text">
                                            {news.created_at}
                                        </p>
                                    </td>
                                    <td className="table__cell">
                                        <p className="news-list__text">
                                            {news.updated_at}
                                        </p>
                                    </td>
                                    <td className="table__cell">
                                        <p className="news-list__text">
                                            {news.title}
                                        </p>
                                    </td>
                                    <td className="table__cell">
                                        <p className="news-list__text news-list__body">
                                            {news.body}
                                        </p>
                                    </td>
                                    <td className="table__cell">
                                        <p className="news-list__text">
                                            {news.isPublished === 0
                                                ? "No"
                                                : "Yes"}
                                        </p>
                                    </td>
                                    <button
                                        onClick={() => this.deleteNews(news.id)}
                                        className="btn"
                                    >
                                        Delete news
                                    </button>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

export default NewsList;
