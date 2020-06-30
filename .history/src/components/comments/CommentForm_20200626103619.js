import React from 'react';
import { connect } from 'react-redux';
import { postComments } from '../../actions/commentsActions';

class CommentsForm extends React.Component {
    state = {
        body: '',
        isInEditMode: false,
    };

    changeEditMode = () => {
        this.setState({
            isInEditMode: !this.state.isInEditMode,
        });
        console.log(this.state.isInEditMode);
    };
    updateComponentValue = () => {
        this.setState({
            isInEditMode: false,
            body: this.refs.theTextInput.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const commentsData = {
            body: this.state.body,
            post_id: this.props.post_id,
            parent_id: 0,
        };
        this.props.postComments(commentsData);
    };
    render() {
        return (
            <div>
                <form className="ui reply form">
                    <div className="field">
                        {this.state.isInEditMode ? (
                            <div className="text">
                                <textarea
                                    defaultValue={this.props.body}
                                    ref="theTextInput"
                                    onChange={(e) =>
                                        this.setState({ body: e.target.value })
                                    }
                                />
                                <button onClick={this.changeEditMode}>X</button>
                                <button onClick={this.updateComponentValue}>
                                    Ok
                                </button>
                            </div>
                        ) : (
                            <div onDoubleClick={this.changeEditMode}>
                                {this.props.body}
                            </div>
                        )}
                    </div>
                    <textarea />
                </form>
            </div>
        );
    }
}

export default connect(null, { postComments })(CommentsForm);
