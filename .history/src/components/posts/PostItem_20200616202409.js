import React from 'react';

const PostItem = (props) => {
    return (
        <div class="ui centered card">
            <div class="image">
                <img
                    src={props.image}
                    alt="Card cap"
                    style={{ width: 800, height: 400 }}
                />
            </div>
            <div>
                <h1>{props.title}</h1>
            </div>
        </div>
    );
};

export default PostItem;
