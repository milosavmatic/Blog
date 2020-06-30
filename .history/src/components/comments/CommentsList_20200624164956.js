import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/commentsActions';

class CommentsList extends React.Component {
    componentDidMount() {
        this.props.fetchComments(this.props.post_id);
    }

    render() {
        const { comments } = this.props;
        console.log(comments);
        return (
            <div>
                {comments.map((comment) => {
                    return <p key={comment.id}>
                    <div className="date">{}</div>
                    {comment.body}</p>;
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comments: Object.values(state.comments),
    };
};

export default connect(mapStateToProps, { fetchComments })(CommentsList);
