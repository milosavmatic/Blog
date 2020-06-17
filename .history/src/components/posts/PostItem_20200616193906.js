import React from 'react';

const PostItem = (props) => {
    return (
        <div class="ui centered card">
            <img
                src={props.image}
                alt="Card cap"
                style={{ width: 800, height: 400 }}
            />
            <div class="card-body">
                <h1 class="card-title">{props.title}</h1>
                <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </p>
            </div>
        </div>
    );
};

export default PostItem;
