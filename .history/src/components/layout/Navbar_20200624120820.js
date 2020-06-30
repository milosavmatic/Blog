import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
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
            {props.auth ? (
                <div className="ui submit button" onClick={props.logoutUser}>
                    Sign out
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state.auth);
    return {
        auth: state.auth,
    };
};

export default connect(mapStateToProps, { logoutUser })(Navbar);
