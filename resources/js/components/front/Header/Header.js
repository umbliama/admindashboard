import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <section className="header">
                <div className="header__menu">
                    <div className="btn header-btn">
                        <span className="header-btn__span"></span>
                        <span className="header-btn__span"></span>
                        <span className="header-btn__span"></span>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;
