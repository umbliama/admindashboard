import React, { Component } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Users from "./Users/Users";
import News from "./News/News";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { observer } from "mobx-react";

@observer
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <section className="dashboard">
                        <Sidebar />
                        <main>.</main>
                    </section>
                </Switch>
                <Switch>
                    <Route
                        path="/users"
                        component={() => <Users store={this.props.store} />}
                    />
                    <Route
                        path="/news"
                        component={() => <News store={this.props.store} />}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Dashboard;
