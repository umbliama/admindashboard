import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dashboard from "./admin/Dashboard";

import { Provider, observer } from "mobx-react";
import usersStore from "../store/UsersStore";
import newsStore from "../store/NewsStore";

const stores = {
    usersStore,
    newsStore
};

@observer
export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Dashboard />
            </div>
        );
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(
        <Provider {...stores}>
            <App />
        </Provider>,
        document.getElementById("root")
    );
}
