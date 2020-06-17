import React from 'react';

const PostItem = (props) => {
    return (
        <div class="card" style={{ width: '18rem' }}>
            <img class="card-img-top" src={props.image} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">
                   
                </p>
                <a  class="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>
    );
};

export default PostItem;
