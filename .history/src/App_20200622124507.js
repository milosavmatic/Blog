import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PostLists from './components/posts/PostLists';
import PostShow from './components/posts/PostShow';
import PostCreate from './components/posts/PostCreate';
import Navbar from './components/layout/Navbar';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import history from './history';
import store from './store/store';
import './App.css';

function App() {
    if (localStorage.jwtToken) {
        localStorage.clear();
        const token = localStorage.jwtToken;
        setAuthToken(token);
        const decoded = jwt_decode(token);
        store.dispatch(setCurrentUser(decoded));

        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            store.dispatch(logoutUser);
            window.location.href = './login';
        }
    }

    return (
        <div>
            <Router history={history}>
                <Navbar />
                <div className="ui container">
                    <Switch>
                        <Route exact path="/" component={PostLists}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Route path="/posts/:id" component={PostShow}></Route>
                        <Route path="/posts/new" component={PostCreate}></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
