import React from 'react';

const PostItem = (props) => {
    return (
        <div
            class="ui centered card"
            style={{ width: 500, backgroundColor: '#2e2d35' }}
        >
            <div class="image">
                <img src={props.image} alt="Card cap" />
            </div>
            <div class="content">
                <h1 class="header">{props.title}</h1>
            </div>
        </div>
    );
};

export default PostItem;
