import React from 'react';
import { connect } from 'react-redux';
import { postComments } from '../../actions/commentsActions';
import { fetchPost } from '../../actions/postActions';

class CommentsContainer extends React.Component {
    state = {
        text: '',
    };

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const commentsData = {
            text: this.state.text,
        };
        this.props.postComments(commentsData, posts_id);
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
                            value={this.state.text}
                            onChange={(e) =>
                                this.setState({ text: e.target.value })
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

const mapStateToProps = (state, ownProps) => {
    console.log(state.posts[ownProps.match.params.id]);
    return {
        comments: state.comments,
        post: state.posts[ownProps.match.params.id],
    };
};

export default connect(mapStateToProps, { postComments, fetchPost })(
    CommentsContainer
);
