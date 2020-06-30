import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

import { connect } from 'react-redux';
import { fetchComments } from '../../actions/commentsActions';

class CommentsList extends React.Component {
    componentDidMount() {
        this.props.fetchComments(this.props.post_id);
        console.log(this.props.post_id);
    }

  
        

    render() {
       const { comments } = this.props;
        return (
            <div className="ui comments">
                {comments.map((comment) => {
                    return (
                        <Comment
                            body={comment.body}
                            time={comment.created_at}
                        />
                    );
                })}
                <CommentForm />
            </div>
        );
    };
    }
}

const mapStateToProps = (state) => {
    return {
        comments: Object.values(state.comments),
    };
};

export default connect(mapStateToProps, { fetchComments })(CommentsList);
