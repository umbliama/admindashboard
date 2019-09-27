import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Sidebar.scss";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <section className="sidebar">
                <nav className="sidebar__nav">
                    <ul className="sidebar__list">
                        <li className="sidebar__item">
                            <Link to="/" className="sidebar__link">
                                Dashboard
                            </Link>
                        </li>
                        <li className="sidebar__item">
                            <Link to="/users" className="sidebar__link">
                                Users
                            </Link>
                        </li>
                        <li className="sidebar__item">
                            <Link to="/news" className="sidebar__link">
                                News
                            </Link>
                        </li>
                    </ul>
                </nav>
            </section>
        );
    }
}

export default Sidebar;
