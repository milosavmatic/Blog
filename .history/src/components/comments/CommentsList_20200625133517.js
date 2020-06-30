import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

import { connect } from 'react-redux';
import { fetchComments } from '../../actions/commentsActions';

class CommentsList extends React.Component {
    state = {
        comments: [],
    };

    componentDidMount() {
        this.props.fetchComments(this.props.post_id);
        this.setState(this.state.comments);
        console.log(this.state.comments);
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
            </div>
        );
    };

    render() {
        return (
            <div className="ui comments">
                {this.props.comments.map((comment) => {
                    return (
                        <div className="comment" key={comment.id}>
                            <p className="avatar">
                                <img
                                    src="https://cdn.shortpixel.ai/spai/w_300+q_lossy+ret_img+to_webp/https://i1.wp.com/www.krug99.ba/wp-content/uploads/2015/06/white-camera-icon-png.png?fit=300%2C252&ssl=1"
                                    alt="icon"
                                />
                            </p>
                            <div className="content">
                                <p className="author"></p>
                                <div className="metadata">
                                    <div className="date">1 day ago</div>
                                </div>
                                <div className="text">
                                    <p>{comment.body}</p>
                                </div>
                                <div className="actions">
                                    <a className="reply" href="/#">
                                        Reply
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <CommentForm post_id={this.props.post_id} />
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
