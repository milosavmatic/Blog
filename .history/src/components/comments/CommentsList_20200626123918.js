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
        console.log(this.props.comments.id);
        return (
            <div className="ui comments">
                {this.props.comments.map((comment) => {
                    return (
                        <Comment
                            body={comment.body}
                            key={comment.id}
                            time={comment.created_at}
                            id={comment.id}
                            comment_id={this.props.comments.id}
                        />
                    );
                })}
                <CommentForm post_id={this.props.post_id} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.comments);
    return {
        comments: Object.values(state.comments.comment),
    };
};

export default connect(mapStateToProps, { fetchComments })(CommentsList);
