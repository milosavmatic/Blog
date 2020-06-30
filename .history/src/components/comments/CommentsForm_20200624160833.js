import React from 'react';
import { connect } from 'react-redux';
import { postComments } from '../../actions/commentsActions';
import CommentsList from './CommentsList';
class CommentsContainer extends React.Component {
    state = {
        body: '',
    };

    onSubmit = (e) => {
        e.preventDefault();
        const commentsData = {
            body: this.state.body,
            post_id: this.props.post_id,
            parent_id: 0,
        };

        console.log(commentsData);
        this.props.postComments(commentsData);
    };
    render() {
        return (
            <div className="ui comments">
                <div className="comment">
                    <a className="avatar" href="/#">
                        <img
                            src="https://cdn.shortpixel.ai/spai/w_300+q_lossy+ret_img+to_webp/https://i1.wp.com/www.krug99.ba/wp-content/uploads/2015/06/white-camera-icon-png.png?fit=300%2C252&ssl=1"
                            alt="icon"
                        />
                    </a>
                    <div className="content">
                        <p className="author">Joe Henderson</p>
                        <div className="metadata">
                            <div className="date">1 day ago</div>
                        </div>
                        <div className="text">
                            <p>
                                The hours, minutes and seconds stand as visible
                                reminders that your effort put them all there.{' '}
                            </p>
                            <CommentsContainer />
                        </div>
                        <div className="actions">
                            <a className="reply" href="/#">
                                Reply
                            </a>
                        </div>
                    </div>
                </div>
                <form className="ui reply form">
                    <div className="field">
                        <textarea
                            value={this.state.body}
                            onChange={(e) =>
                                this.setState({ body: e.target.value })
                            }
                        ></textarea>
                    </div>
                    <button
                        className="ui primary submit labeled icon button"
                        onClick={this.onSubmit}
                    >
                        <i className="icon edit"></i> Add Comment
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments,
    };
};

export default connect(mapStateToProps, { postComments })(CommentsContainer);
