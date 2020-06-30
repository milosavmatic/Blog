import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions/postActions';
import { postLike, deleteLike } from '../../actions/likesActions';
import { fetchNotification } from '../../actions/notificationsActions';

class PostLists extends React.Component {
    componentDidMount() {
        const { fetchPosts, fetchNotification } = this.props;
        fetchPosts();
        fetchNotification();
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
            const post_id = post.id;
            const user_id = post.user_id;
            console.log(user_id);
            return (
                <div className="item" key={post.id}>
                    {this.renderAdmin(post)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/posts/${post_id}`}>{post.title}</Link>
                        <p>{post.likes_count}</p>
                        <button onClick={() => this.props.postLike(post_id)}>
                            <i className="thumbs up outline icon"></i>
                        </button>
                        <button
                            onClick={() => this.props.deleteLike(post_id)}
                            key={post.id}
                        >
                            <i className="thumbs down outline icon"></i>
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
    console.log(state.likes.deleteLike);
    console.log(state.auth);
    return {
        posts: Object.values(state.posts),
        auth: state.auth,
        currentUserId: state.auth.user.sub,
        likeCounter: state.likes.likeCounter,
    };
};

export default connect(mapStateToProps, {
    fetchPosts,
    postLike,
    deleteLike,
    fetchNotification,
})(PostLists);
