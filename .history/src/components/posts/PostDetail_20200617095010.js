import React from 'react';
import CommentsContainer from '../comments/CommentsContainer';

const PostDetails = () => {
    return (
        <div class="ui segment">
            <img
                class="ui centered medium image"
                src="https://www.kurir.rs/data/images/2013/01/23/21/257765_moskva-crveni-trg_ls.jpg"
                alt="detail"
                style={{ width: 700 }}
            />
            <h1>News about city</h1>

            <CommentsContainer />
        </div>
    );
};

export default PostDetails;
