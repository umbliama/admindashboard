import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dashboard from "./admin/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import rootStore from "../store/RootStore";

import Header from "./front/Header/Header";

export default class App extends Component {
    render() {
        return (
            // <BrowserRouter>
            //     <Switch>
            //         <div className="container">
            //             <Header />

            //             <Switch>
            //                 <Route
            //                     path="/admin"
            //                     component={() => <Dashboard />}
            //                 />
            //             </Switch>
            //         </div>
            //     </Switch>
            // </BrowserRouter>
            <div className="app">
                <Dashboard store={rootStore} />
            </div>
        );
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
