import React from 'react';
import PostItem from './PostItem';
import json from '../../api/json';
import { Link } from 'react-router-dom';

const PostList = () => {
    return (
        <div style={{ backgroundColor: '#2e2d35', height: 1000 }}>
            {json.map((post) => (
                <Link to="/details">
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
