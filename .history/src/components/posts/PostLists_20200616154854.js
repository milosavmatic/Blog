import React from 'react';
import PostItem from './PostItem';
import json from '../../api/json';
import { Link } from 'react-router-dom';

const PostList = () => {
    return (
        <div>
            {json.map((post) => (
                <Link to="/details/1">
                    <PostItem
                        key={post.id}
                        title={post.title}
                        image={post.image}
                    />
                </Link>
            ))}
        </div>
    );
};

export default PostList;
