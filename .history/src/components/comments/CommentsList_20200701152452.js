import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

import { connect } from 'react-redux';
import { fetchComments } from '../../actions/commentsActions';

class CommentsList extends React.Component {
    componentDidMount() {
        this.props.fetchComments(this.props.post_id);
    }

    render() {
        console.log(localStorage);
        return (
            <div className="ui comments">
                {this.props.comments.map((comment) => {
                    return (
                        <Comment
                            body={comment.body}
                            key={comment.id}
                            time={comment.created_at}
                            id={comment.id}
                            comment_id={comment.id}
                            user_id={comment.user_id}
                        />
                    );
                })}
                <CommentForm
                    post_id={this.props.post_id}
                    user_id={this.props.currentUserId}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(Object.values(state.comments.comments));
    return {
        comments: Object.values(state.comments.comments),
        currentUserId: state.auth.user.sub,
    };
};

export default connect(mapStateToProps, { fetchComments })(CommentsList);
