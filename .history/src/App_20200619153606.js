import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PostLists from './components/posts/PostLists';
import PostShow from './components/posts/PostShow';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import history from './history';
import './App.css';

function App() {


if(localStorage.jwtToken) {
    const token = 
}

    return (
        <Router history={history}>
            <div className="App">
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
                </div>

                <Switch>
                    <Route exact path="/" component={PostLists}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route path="/posts/:id" component={PostShow}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
