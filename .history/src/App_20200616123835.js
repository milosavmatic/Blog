import React from 'react';
import { connect } from 'react-redux';
import { addComment } from './actions';
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

export default App
