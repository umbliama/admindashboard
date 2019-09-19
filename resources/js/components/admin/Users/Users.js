import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.store.getUserInfo();
        console.log(this.props.store.user);
    }
    render() {
        const store = this.props.store;
        return (
            <section className="users">
                {console.log(store)}
                <table>
                    <tbody>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Email verified</td>
                            <td>Register date</td>
                        </tr>
                        {store.user.map(user => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.email_verified_at === null
                                        ? "No"
                                        : "Yes"}
                                </td>
                                <td>{user.created_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        );
    }
}

export default Users;
