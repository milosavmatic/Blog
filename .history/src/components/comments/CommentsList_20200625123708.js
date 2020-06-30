import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

import { connect } from 'react-redux';
import { fetchComments } from '../../actions/commentsActions';

class CommentsList extends React.Component {
    renderList = () => {
        const { comments } = this.props;
        return (
            <div className="ui comments">
                {comments.map((comment) => {
                    return (
                        <Comment
                            body={comment.body}
                            time={comment.create_at}
                            key={comment.id}
                        />
                    );
                })}
                <CommentForm post_id={this.props.post_id} />
            </div>
        );
    };

    render() {
        console.log(this.props.post_id);
        return <div>{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        comments: Object.values(state.comments),
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps)
    dispatch(fetchComments());
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
