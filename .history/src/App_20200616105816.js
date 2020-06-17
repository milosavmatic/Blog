import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from './actions';
import './App.css';

class App extends React.Component {
    state = {
      text: ''
    }

    const addComment = (text) => {
        return addComment(text);
    };
render() {
    return (
        <div className="App">
            <input
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <button onClick={() => addComment()}>Submit</button>
        </div>
    );
}
}

const mapStateToProps = (state) => {
    console.log(state.comment);
    return { comment: state.comment };
};
export default connect(mapStateToProps, { addComment })(App);
