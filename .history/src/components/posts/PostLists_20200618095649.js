import React from 'react';
import PostItem from './PostItem';
import json from '../../api/json';
import { Link } from 'react-router-dom';

class PostList extends React.Component {
render() {
    return (
        <div>
            {json.map((post) => (
                <Link to="/details">
                    <PostItem
                        key={post.id}
                        title={post.title}
                        image={post.image}
                    />
                </Link>
            ))}
            <hr></hr>
        </div>
    );
}
};

export default PostList;
