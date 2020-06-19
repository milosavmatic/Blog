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
        return this.props.posts.map((post) => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/streams/${post.id}`}>{post.title}</Link>
                    </div>
                    <div className="description">{post.body}</div>
                </div>
            );
        });
    };

    render() {
        return (
            <div>
                {this.renderList()}
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
