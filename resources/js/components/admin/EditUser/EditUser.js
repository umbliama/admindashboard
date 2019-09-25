import React, { Component } from "react";

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <section className="edit-user">
                <form>
                    <label>Name</label>
                    <input type="text" name="name" />

                    <label>Email</label>
                    <input type="email" name="email" />

                    <label>Password</label>
                    <input type="password" name="password" />

                    <button type="submit">Send</button>
                </form>
            </section>
        );
    }
}

export default EditUser;
