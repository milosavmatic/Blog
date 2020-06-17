import React from 'react';
import { connect } from 'react-redux';
import { addComment } from './actions';
import './App.css';

function App() {
    return (
        <div className="App">
            <input />
        </div>
    );
}

export default connect(null, { addComment })(App);
