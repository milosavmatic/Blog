import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';

class PostList extends React.Component {
    componentDidMount = () => {
        const { fetchPosts } = this.props;
        fetchPosts();
    };

    renderList = () => {
        return this.props.posts.results.map((post) => {
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
        const { posts, error, isLoading } = this.props;
        console.log(posts, error, isLoading);
        return (
            <div>
                <div className="ui celled list">{this.renderList()}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts.data,
    error: state.posts.error,
    isLoading: state.posts.isLoading,
});

const mapDispatchToProps = {
    fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
