import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
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
                {localStorage.jwtToken ? (
                    <div
                        className="ui submit button"
                        onClick={this.props.logoutUser}
                    >
                        Sign out
                    </div>
                ) : null}
            </div>
        );
    }
}

console.log(localStorage.jwtToken);

export default Navbar;
