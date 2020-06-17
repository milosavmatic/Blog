import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from './actions';
import './App.css';

function App() {
    const [text, setText] = useState('');
    console.log(text);
    return (
        <div className="App">
            <input value={text} onChange={(text) => setText(text)} />
        </div>
    );
}

export default connect(null, { addComment })(App);
