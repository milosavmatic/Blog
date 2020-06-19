import React from 'react';
import PostItem from './PostItem';
import json from '../../api/json';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

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
}

export default PostList;
