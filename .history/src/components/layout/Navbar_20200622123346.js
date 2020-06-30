import React from 'react'
import { Link } from "react-router-dom";


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
                        <Link className="item" to="/login">
                            Login
                        </Link>

                        <Link className="item" to="/register">
                            Register
                        </Link>
                    </div>
                </div
    )
}

export default Navbar