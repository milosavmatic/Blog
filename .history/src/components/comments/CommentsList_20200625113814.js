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
                    return (
                        <div className="comment">
                            <p className="avatar">
                                <img
                                    src="https://cdn.shortpixel.ai/spai/w_300+q_lossy+ret_img+to_webp/https://i1.wp.com/www.krug99.ba/wp-content/uploads/2015/06/white-camera-icon-png.png?fit=300%2C252&ssl=1"
                                    alt="icon"
                                />
                            </p>
                            <div className="content">
                                <p className="author">Joe Henderson</p>
                                <div className="metadata">
                                    <div className="date">{comment.time}</div>
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
