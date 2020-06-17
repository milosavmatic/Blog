import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SignIn from './components/SingIn';
import SignUp from './components/SingUp';
import PostList from './components/posts/PostLists';
import PostDetail from './components/posts/PostDetail';

import './App.css';

function App() {
    return (
        <Router>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">
                                    Posts
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/signIn">
                                    Sign In
                                </Link>
                            </li>
                            <li class="nav-item" exact>
                                <Link class="nav-link" to="/signUp">
                                    SignUp
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <PostList />
                    </Route>
                    <Route path="/signIn">
                        <SignIn />
                    </Route>
                    <Route path="/signUp">
                        <SignUp />
                    </Route>
                    <Route path="/details">
                        <PostDetail />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
