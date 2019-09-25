import React, { Component } from "react";

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    updateUser = (key, value) => {
        this.props.store.userForm[key] = value;
    };
    onChange = () => {
        this.updateUser(event.target.name, event.target.value);
    };

    createUser = () => {
        this.props.store.createUser(
            this.props.store.userForm["name"],
            this.props.store.userForm["email"],
            this.props.store.userForm["password"]
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
