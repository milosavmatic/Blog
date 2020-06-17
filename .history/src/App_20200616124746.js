import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SignIn from './components/SingIn';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Sign In</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/">
                        <SignIn />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
