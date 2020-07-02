import React from 'react';
import CommentsEdit from './CommentsEdit';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Comment = (props) => {
    return (
        <div className="comment">
            <p className="avatar">
                <img
                    src="https://cdn.shortpixel.ai/spai/w_300+q_lossy+ret_img+to_webp/https://i1.wp.com/www.krug99.ba/wp-content/uploads/2015/06/white-camera-icon-png.png?fit=300%2C252&ssl=1"
                    alt="icon"
                />
            </p>
            <div className="content">
                <p className="author"></p>
                <div className="metadata">
                    <div className="date">{props.time}</div>
                </div>
                <div className="text">
                    <CommentsEdit body={props.body} id={props.id} />
                </div>
                <div className="actions">
                    {
                        <Link
                            className="reply"
                            to={`/comments/delete/${props.comment_id}`}
                        >
                            Delete
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state.auth.user.sub)
    return {
        currentUserId: state.auth.user.sub,
    };
};

export default connect(mapStateToProps)(Comment);
