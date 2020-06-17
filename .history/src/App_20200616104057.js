import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from './actions';
import './App.css';

function App() {
    const [t, setText] = useState('');
    console.log(t);
    return (
        <div className="App">
            <input value={t} onChange={(t) => setText(t)} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return { comment: state.comment };
};
export default connect(mapStateToProps, { addComment })(App);
