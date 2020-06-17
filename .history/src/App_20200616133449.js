import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SignIn from './components/SingIn';
import SignUp from './components/SingUp';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul class="nav">
                        <li class="nav-item">
                            <Link class="nav-link active" to="/">
                                Sign In
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/signUp">SignUp</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/">
                        <SignIn />
                    </Route>
                    <Route>
                        <SignUp />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
