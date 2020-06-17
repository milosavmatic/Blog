import React from 'react';
import PostItem from './PostItem';
import posts 



const PostList = () => {
    return (
        <div>
            {posts.map((post) => (
                <PostItem key={post.id} title={post.title} image={post.image} />
            ))}
        </div>
    );
};

export default PostList;
