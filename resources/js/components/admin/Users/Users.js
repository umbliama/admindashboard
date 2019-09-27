import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import "./Users.scss";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

@inject("usersStore")
@observer
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.usersStore.getUserInfo();
    }
    deleteUser(userId) {
        this.props.usersStore.deleteUser(userId);
    }
    render() {
        const store = this.props.usersStore;
        return (
            <BrowserRouter>
                <Switch>
                    <section className="users">
                        <div className="container">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td className="table__cell">Id</td>
                                        <td className="table__cell">Name</td>
                                        <td className="table__cell">Email</td>
                                        <td className="table__cell">
                                            Email verified
                                        </td>
                                        <td className="table__cell">
                                            Register date
                                        </td>
                                        <Link to="/users/create">
                                            <button className="btn">
                                                Add user
                                            </button>
                                        </Link>
                                        <Link to="/users/edit">
                                            <button className="btn">
                                                Edit user
                                            </button>
                                        </Link>
                                    </tr>
                                    {store.user.map(user => (
                                        <tr key={user.id}>
                                            <td className="table__cell">
                                                {user.id}
                                            </td>
                                            <td className="table__cell">
                                                {user.name}
                                            </td>
                                            <td className="table__cell">
                                                {user.email}
                                            </td>
                                            <td className="table__cell">
                                                {user.email_verified_at === null
                                                    ? "No"
                                                    : "Yes"}
                                            </td>
                                            <td className="table__cell">
                                                {user.created_at}
                                            </td>
                                            <button
                                                onClick={() =>
                                                    this.deleteUser(user.id)
                                                }
                                                className="btn"
                                            >
                                                Delete user
                                            </button>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Users;
