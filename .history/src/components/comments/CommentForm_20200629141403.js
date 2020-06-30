import React from 'react';
import { connect } from 'react-redux';
import { postComments } from '../../actions/commentsActions';
import { postNotifications } from '../../actions/notificationsActions';

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

export default connect(null, { postComments, postNotifications })(CommentsForm);
