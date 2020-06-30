import React from 'react';
import { connect } from 'react-redux';
import { postComments } from '../../actions/commentsActions';

class CommentsForm extends React.Component {
    state = {
        body: '',
        isInEditMode: false,
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
                    {this.state.isInEditMode ? (
                        <div className="field">
                            <textarea
                                defaultValue={this.state.body}
                                onChange={(e) =>
                                    this.setState({ body: e.target.value })
                                }
                            ></textarea>
                        </div>
                    ) : (
                        <div>{this.props.comments.body}</div>
                    )}
                    <button
                        className="ui primary submit labeled icon button"
                        onClick={this.onSubmit}
                    >
                        <i className="icon edit"></i> Add Comment
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments.comment,
    };
};

export default connect(mapStateToProps, { postComments })(CommentsForm);
