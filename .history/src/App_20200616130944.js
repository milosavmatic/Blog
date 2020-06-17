import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SignIn from './components/SingIn';
import SignUp from './components/SingUp';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <ul>
                    <li>
                        <Link to="/">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/signUp">Sign Up</Link>
                    </li>
                </ul>

                <Switch>
                    <Route  path="/">
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
