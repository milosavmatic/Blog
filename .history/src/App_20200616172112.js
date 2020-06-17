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
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">
                                Posts
                                <span class="sr-only">(current)</span>
                            </Link>
                        </li>
                        <div style={{ flex: 1, justifyContent: 'flex-end' }}>
                            <li>
                                <Link class="nav-link" to="/signIn">
                                    Sign In
                                </Link>
                            </li>
                            <li class="nav-item" exact>
                                <Link to="/signUp">SignUp</Link>
                            </li>
                        </div>
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
