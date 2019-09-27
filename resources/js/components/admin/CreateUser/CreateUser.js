import React, { Component } from "react";
import { inject } from "mobx-react";

@inject("usersStore")
class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    updateUser = (key, value) => {
        this.props.usersStore.userForm[key] = value;
    };
    onChange = () => {
        this.updateUser(event.target.name, event.target.value);
    };

    createUser = () => {
        this.props.usersStore.createUser(
            this.props.usersStore.userForm["name"],
            this.props.usersStore.userForm["email"],
            this.props.usersStore.userForm["password"]
        );
    };

    render() {
        return (
            <section className="create-user">
                <form>
                    <label>Name</label>
                    <input onChange={this.onChange} name="name" type="text" />
                    <label>E-mail</label>
                    <input onChange={this.onChange} name="email" type="text" />
                    <label>Password</label>
                    <input
                        onChange={this.onChange}
                        name="password"
                        type="text"
                    />
                    <a onClick={this.createUser}>Create</a>
                </form>
            </section>
        );
    }
}

export default CreateUser;
