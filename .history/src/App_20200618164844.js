import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SignIn from './components/auth/Login';
import SignUp from './components/auth/SingUp';
import PostList from './components/posts/PostLists';
import PostShow from './components/posts/PostShow';

import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <div
                    className="ui secondary pointing menu"
                    style={{ backgroundColor: '#43836c', height: 20 }}
                >
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
                    <Route exact path="/" component={PostList}></Route>
                    <Route path="/signIn" component={SignIn}></Route>
                    <Route path="/signUp" component={SignUp}></Route>
                    <Route path="/posts/:id" component={PostShow}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
