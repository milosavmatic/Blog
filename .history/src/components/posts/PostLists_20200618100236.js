import React from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList = () => {
        return 
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

const mpStateToProps = (state) => {
    console.log(state.posts);
    return { posts: state.posts };
};

export default connect(mpStateToProps, { fetchPosts })(PostList);
