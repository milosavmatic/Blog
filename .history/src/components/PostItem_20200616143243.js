import React from 'react';

const PostItem = (props) => {
    return (
        <div class="card" style={{ width: '18rem' }}>
            <image class="card-img-top" alt="Card image cap" src={props.image} />
            <div class="card-body">
                <p class="card-text">
                    {props.desc}
                </p>
            </div>
        </div>
    );
};

export default PostItem;
