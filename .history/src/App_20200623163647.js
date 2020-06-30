import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PostLists from './components/posts/PostLists';
import PostShow from './components/posts/PostShow';
import PostCreate from './components/posts/PostCreate';
import Navbar from './components/layout/Navbar';
import EditPost from './components/posts/EditPost';
import DeletePost from './components/posts/DeletePost';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import history from './history';
import store from './store/store';
import './App.css';

function App() {
    if (localStorage.jwtToken) {
        const token = localStorage.jwtToken;
        console.log(token);
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
                        <Route path="/posts/login" component={Login}></Route>
                        <Route path="/posts/register" component={Register}></Route>
                        <Route path="/posts/:id" component={PostShow}></Route>
                        <Route path="/posts/new" component={PostCreate}></Route>
                        <Route path="/posts/edit/:id" component={EditPost}></Route>
                        <Route
                            path="/posts/delete/:id"
                            component={DeletePost}
                        ></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
