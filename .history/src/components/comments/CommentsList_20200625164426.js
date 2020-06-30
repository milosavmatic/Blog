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
        return (
            <div className="ui comments">
                {this.props.comments.map((comment) => {
                    return (
                        <Comment body={comment.body} key={comment.id} time={comment.created_at}/>
                    );
                })}
                <CommentForm post_id={this.props.post_id} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comments: Object.values(state.comments.comment),
    };
};

export default connect(mapStateToProps, { fetchComments })(CommentsList);
