import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from './actions';
import './App.css';

function App() {
    const [text, setText] = useState('');
    console.log(text);

const Comment = (text) => {
  return addComment(text)
}

    return (
        <div className="App">
            <input
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <button>
Submit
            </button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { comment: state.comment };
};
export default connect(mapStateToProps, { addComment })(App);
