import React from 'react';
import { connect } from 'react-redux';
import { addComment } from './actions';
import SignIn from './components/SingIn';
import './App.css';

function App(props) {
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
