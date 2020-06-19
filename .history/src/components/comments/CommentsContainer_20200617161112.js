import React from 'react';

const CommentsContainer = () => {
    return (
        <div class="ui comments">
            <div class="comment">
                <a class="avatar" href="/#">
                    <img
                        src="https://png2.cleanpng.com/sh/e146b71ee348139b4d0e0fda400db45e/L0KzQYm3V8A6N5Z7ipH0aYP2gLBuTfRzNaFmjORyY3uwgrbwjr1naZRteeRFdD3pgn78kv9td5hufZ9vbXiwhcP2jP8ubZ51hNHEZXX2PbrqjB4uPZM5TKMANHbmSbbphMAvOmM8UaU5M0O0RYS4Ucg5PWYAUKQCMT7zfri=/kisspng-dr-patrick-rein-facharzt-fr-urologie-fmh-urolo-employees-icon-5b44154fc9ebd0.2279303315311885598271.png"
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
