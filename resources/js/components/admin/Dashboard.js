import React, { Component } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Users from "./Users/Users";
import News from "./News/News";
import CreateUser from "./CreateUser/CreateUser";
import EditUser from "./EditUser/EditUser";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { observer } from "mobx-react";
import "./scss/_utility.scss";

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
                        exact
                        path="/users"
                        component={() => <Users store={this.props.store} />}
                    />
                    <Route
                        path="/news"
                        component={() => <News store={this.props.store} />}
                    />
                    <Route
                        path="/users/create"
                        component={() => (
                            <CreateUser store={this.props.store} />
                        )}
                    ></Route>
                    <Route
                        path="/users/edit"
                        component={() => <EditUser store={this.props.store} />}
                    ></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Dashboard;
