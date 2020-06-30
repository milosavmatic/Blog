import React from 'react';
import CommentsEdit from './CommentsEdit';

const Comment = (props) => {
    return (
        <div className="comment" id={props.id}>
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
                    
                    <div className="reply">Delete</div>
                </div>
            </div>
        </div>
    );
};

export default Comment;
