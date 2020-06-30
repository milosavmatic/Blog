import React from 'react';
import { connect } from 'react-redux';
import { postComments, fetchComments } from '../../actions/commentsActions';

class CommentsForm extends React.Component {
    state = {
        body: '',
    };

    componentDidMount() {
        this.props.fetchComments(this.props.match.params.id);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const commentsData = {
            body: this.state.body,

            parent_id: 0,
        };
        const post_id = this.props.post_id;

        console.log(commentsData, post_id);
        this.props.postComments(commentsData);
    };
    render() {
        console.log(this.props.comments);
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
    console.log(state.comments);
    return {
        comments: Object.values(state.comments),
    };
};

export default connect(mapStateToProps, { postComments, fetchComments })(
    CommentsForm
);
