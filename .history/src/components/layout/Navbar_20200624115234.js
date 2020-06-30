import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div
            className="ui secondary pointing menu"
            style={{ backgroundColor: '#43836c', height: 20 }}
        >
            <Link className="item" to="/">
                Posts
            </Link>
            <div className="right menu">
                <Link className="item" to="/posts/login">
                    Login
                </Link>

                <Link className="item" to="/posts/register">
                    Register
                </Link>
            </div>
        </div>
    );
};

console.log(localStorage);

export default Navbar;
