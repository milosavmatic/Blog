import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';

class PostLists extends React.Component {
    componentDidMount = () => {
        const { fetchPosts } = this.props;
        fetchPosts();
        console.log(fetchPosts)
    };

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
    posts: state.posts,
    error: state.error,
    isLoading: state.isLoading,
});

export default connect(mapStateToProps, { fetchPosts })(PostLists);
