import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SignIn from './components/SingIn';
import './App.css';

function App() {
    return (
        
        <div className="App">
            <div>
                <SignIn />
            </div>
        </div>
    );
}

export default App;
