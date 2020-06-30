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
            <div className="content" >
                {comments.map((comment) => {
                    return (
                        <div key={comment.id}>
                            <p className="author">Joe Henderson</p>
                            <div className="metadata">
                                <div className="date">{comment.created_at}</div>
                            </div>
                            <div className="text">
                                <p>{comment.body}</p>
                            </div>
                        </div>
                    );
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
