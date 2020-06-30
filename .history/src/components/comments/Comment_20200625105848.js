import React from 'react';

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
    );
};

export default Comment;
