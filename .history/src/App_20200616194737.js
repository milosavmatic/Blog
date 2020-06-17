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
            <div className='App'>
                <div className="ui secondary pointing menu" style={{backgroundColor: "gray"}}>
                    <Link className="item" to="/">
                        Posts
                    </Link>
                    <div className="right menu">
                        <Link className="item" to="/signIn">
                            Sign In
                        </Link>

                        <Link className="item" to="/signUp">
                            SignUp
                        </Link>
                    </div>
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
