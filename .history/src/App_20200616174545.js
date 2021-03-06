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
                <div className="ui secondary pointing menu">
                    <Link className="item" to="/">
                        Posts
                    </Link>

                    <Link class="nav-link" to="/signIn">
                        Sign In
                    </Link>

                    <Link class="nav-link" to="/signUp">
                        SignUp
                    </Link>
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
