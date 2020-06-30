import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

import { connect } from 'react-redux';
import { fetchComments } from '../../actions/commentsActions';

class CommentsList extends React.Component {
    componentDidMount() {
        this.props.fetchComments(this.props.post_id);
    }

    componentWillUpdate() {
        const { comments } = this.props;
        console.log(comments);
    }
    renderList = () => {
        const { comments } = this.props;
        return (
            <div className="ui comments">
                {comments.map((comment) => {
                    return <Comment body={comment.body} />;
                })}
                <CommentForm />
            </div>
        );
    };

    render() {
        return <div>{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        comments: Object.values(state.comments),
    };
};

export default connect(mapStateToProps, { fetchComments })(CommentsList);
