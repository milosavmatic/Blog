import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SignIn from './components/SingIn';
import SignUp from './components/SingUp';
import './App.css';

function App() {
    return (
        <Router>
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link active" to="/">
                        Sign In
                    </a>
                </li>
                <li class="nav-item" exact>
                    <a class="nav-link" to="/signUp">
                        SignUp
                    </a>
                </li>
            </ul>

            <Switch>
                <Route exact path="/">
                    <SignIn />
                </Route>
                <Route>
                    <SignUp />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
