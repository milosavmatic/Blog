import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from './actions';
import './App.css';

class App extends React.Component {
    state = {
        text: '',
    };

    onSubmit = () => {
        return this.props.addComment(this.statetext);
    };
    render() {
        const { text } = this.state;
        return (
            <div className="App">
                <input
                    value={text}
                    onChange={(event) => this.setState(event.target.value)}
                />
                <button onClick={() => this.onSubmit()}>Submit</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.comment);
    return { comment: state.comment };
};
export default connect(mapStateToProps, { addComment })(App);
