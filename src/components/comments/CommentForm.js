import React from 'react';
import { connect } from 'react-redux';
import { postComments } from '../../actions/commentsActions';

class CommentsForm extends React.Component {
    state = {
        body: '',
    };

    onSubmit = (e) => {
        e.preventDefault();
        const commentsData = {
            body: this.state.body,
            post_id: this.props.post_id,
            parent_id: 0,
            user_id: this.props.currentUserId,
        };

        this.props.postComments(commentsData);
    };
    render() {
        return (
            <div>
                <form className="ui reply form">
                    <div className="field">
                        <textarea
                            value={this.state.body}
                            onChange={(event) =>
                                this.setState({ body: event.target.value })
                            }
                        ></textarea>
                    </div>
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
        currentUserId: state.auth.user.sub,
    };
};

export default connect(mapStateToProps, { postComments })(CommentsForm);
