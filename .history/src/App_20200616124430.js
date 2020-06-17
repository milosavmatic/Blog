import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SignIn from './components/SingIn';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <div>
                    <SignIn />
                </div>
            </div>
        </Router>
    );
}

export default App;
