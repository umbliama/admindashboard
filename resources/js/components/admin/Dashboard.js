import React, { Component } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Users from "./Users/Users";
import NewsList from "./NewsList/NewsList";
import CreateUser from "./CreateUser/CreateUser";
import EditUser from "./EditUser/EditUser";
import { Line } from "react-chartjs-2";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { observer } from "mobx-react";
import "./scss/_utility.scss";
const data = {
    labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    datasets: [
        {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 55, 40, 55, 40, 40]
        }
    ]
};
@observer
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="main">
                <BrowserRouter>
                    <section className="dashboard">
                        <Sidebar />
                        <main>
                            <Line data={data} />
                        </main>
                    </section>
                    <Switch>
                        <Route
                            exact
                            path="/users"
                            component={() => <Users store={this.props.store} />}
                        />
                        <Route
                            path="/news"
                            component={() => (
                                <NewsList store={this.props.store} />
                            )}
                        />
                        <Route
                            path="/users/create"
                            component={() => (
                                <CreateUser store={this.props.store} />
                            )}
                        ></Route>
                        <Route
                            path="/users/edit"
                            component={() => (
                                <EditUser store={this.props.store} />
                            )}
                        ></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Dashboard;
