import React from 'react';

const CommentsContainer = () => {
    return (
        <div class="ui comments">
            <div class="comment">
                <a class="avatar" href="/#">
                    <img
                        src="https://cdn.shortpixel.ai/spai/w_300+q_lossy+ret_img+to_webp/https://i1.wp.com/www.krug99.ba/wp-content/uploads/2015/06/white-camera-icon-png.png?fit=300%2C252&ssl=1"
                        alt="icon"
                    />
                </a>
                <div class="content">
                    <p class="author">Joe Henderson</p>
                    <div class="metadata">
                        <div class="date">1 day ago</div>
                    </div>
                    <div class="text">
                        <p>
                            The hours, minutes and seconds stand as visible
                            reminders that your effort put them all there.{' '}
                        </p>
                    </div>
                    <div class="actions">
                        <a class="reply" href="/#">
                            Reply
                        </a>
                    </div>
                </div>
            </div>
            <form class="ui reply form">
                <div class="field">
                    <textarea></textarea>
                </div>
                <div class="ui primary submit labeled icon button">
                    <i class="icon edit"></i> Add Comment
                </div>
            </form>
        </div>
    );
};

export default CommentsContainer;
