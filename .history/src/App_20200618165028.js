import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
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
                        <Link className="item" to="/login">
                            Login
                        </Link>

                        <Link className="item" to="/register">
                            Register
                        </Link>
                    </div>
                </div>

                <Switch>
                    <Route exact path="/" component={PostList}></Route>
                    <Route path="/signIn" component={Login}></Route>
                    <Route path="/signUp" component={Register}></Route>
                    <Route path="/posts/:id" component={PostShow}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
