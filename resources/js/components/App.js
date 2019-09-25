import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dashboard from "./admin/Dashboard";

import { Provider, observer } from "mobx-react";
import RootStore from "../store/RootStore";

@observer
export default class App extends Component {
    render() {
        return (
            <Provider rootStore={new RootStore()}>
                <div className="app">
                    <Dashboard />
                </div>
            </Provider>
        );
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
