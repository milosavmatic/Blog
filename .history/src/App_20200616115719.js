import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from './actions';
import SignIn from './components/SingIn';
import './App.css';

function App(props) {
    const [text, setText] = useState('');
    console.log(text);

    const onSubmit = () => {
        return props.addComment(text);
    };

    return (
        <div className="App">
            <div>
                <SignIn />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state.comment);
    return { comment: state.comment };
};
export default connect(mapStateToProps, { addComment })(App);
