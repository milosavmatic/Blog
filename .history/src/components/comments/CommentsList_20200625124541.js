import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

import { connect } from 'react-redux';
import { fetchComments } from '../../actions/commentsActions';

class CommentsList extends React.Component {
    componentDidMount() {
        this.props.fetchComments(this.props.post_id);
    }

    renderList = () => {
        const { comments } = this.props;
        return (
            <div className="ui comments">
                {comments.map((comment) => {
                    return (
                        <Comment
                            key={comment.id}
                            body={comment.body}
                            time={comment.create_at}
                        />
                    );
                })}
                <CommentForm post_id={this.props.post_id} />
            </div>
        );
    };

    render() {
        return <div>{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    console.log(Object.values(state.comments))
    return {
        comments: Object.values(state.comments),
    };
};

export default connect(mapStateToProps, { fetchComments })(CommentsList);
