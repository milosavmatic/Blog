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
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">
                                    Posts
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li class="nav-item right">
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
