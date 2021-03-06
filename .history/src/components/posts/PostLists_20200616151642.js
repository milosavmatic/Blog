import React from 'react';
import PostItem from './PostItem';
import json from '../api/json';

const PostList = () => {
    return (
        <div>
            {json.map((post) => (
                <PostItem key={post.id} title={post.title} image={post.image} />
            ))}
        </div>
    );
};

export default PostList;
