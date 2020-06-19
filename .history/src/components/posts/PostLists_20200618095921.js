import React from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                {map((post) => (
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



export default connect(null, {fetchPosts})(PostList)
