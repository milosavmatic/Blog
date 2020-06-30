import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions/postActions';

class PostLists extends React.Component {
    componentDidMount() {
        const { fetchPosts } = this.props;
        fetchPosts();
    }

    renderAdmin = (post) => {
        if (post.user_id === parseInt(this.props.currentUserId)) {
            return (
                <div className="right floated content">
                    <Link to={`/edit/${post.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link
                        to={`/delete/${post.id}`}
                        className="ui button negative"
                    >
                        Delete
                    </Link>
                </div>
            );
        }
    };

    renderList = () => {
        const { posts } = this.props;
        return posts.map((post) => {
            console.log(post.id);
            return (
                <div className="item" key={post.id}>
                    {this.renderAdmin(post)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                        <p>{post.likes_count}</p>
                        <button>
                            <i class="thumbs down outline icon"></i>
                        </button>
                    </div>
                </div>
            );
        });
    };

    renderCreate = () => {
        if (this.props.auth.isAuthenticated) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/new" className="ui button primary">
                        Create Streams
                    </Link>
                </div>
            );
        }
    };

    render() {
        return (
            <div className="ui container">
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.posts),
        auth: state.auth,
        currentUserId: state.auth.user.sub,
    };
};

export default connect(mapStateToProps, { fetchPosts })(PostLists);
