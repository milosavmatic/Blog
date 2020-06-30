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
                    console.log(comment.id);
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
        return(
             {comments.map((comment) => {
                 return (
                      
                 )
             }
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: Object.values(state.comments),
    };
};

export default connect(mapStateToProps, { fetchComments })(CommentsList);
