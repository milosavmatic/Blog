import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SignIn from './components/SingIn';
import SignUp from './components/SingUp';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse" id="navbarNav">
                    
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">
                                    Sign In
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/signUp">
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <SignIn />
                    </Route>
                    <Route path="/signUp">
                        <SignUp />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
