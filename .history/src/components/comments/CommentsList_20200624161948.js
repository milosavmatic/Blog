import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/commentsActions';

class CommentsList extends React.Component {
    componentDidMount() {
        this.props.fetchComments(this.props.post_id);
    }

    render() {
        return (
            <div>
                {this.props.comments.map((comment) => {
                    return <p key={comment.id}>{comment.body}</p>;
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        comments: state.comments,
    };
};

export default connect(mapStateToProps, { fetchComments })(CommentsList);
