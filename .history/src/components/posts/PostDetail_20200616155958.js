import React from 'react';
import json from '../../api/json';

const PostDetail = (props) => {
    return (
        <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-ride="carousel"
        >
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img
                        class="d-block w-100"
                        src={props.image}
                        alt="First slide"
                    />
                    <h1>{props.title}</h1>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
