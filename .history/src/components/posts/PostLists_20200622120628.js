import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';

class PostLists extends React.Component {
    componentDidMount() {
        const { fetchPosts } = this.props;
        fetchPosts();
    }

    renderAdmin = (post) => {
        if (post.user_id === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link
                        to={`/streams/edit/${post.id}`}
                        className="ui button primary"
                    >
                        Edit
                    </Link>
                    <Link
                        to={`/streams/delete/${post.id}`}
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
            console.log(post.user_id);
            return (
                <div className="item" key={post.id}>
                {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </div>
                </div>
            );
        });
    };

    render() {
        console.log(this.props.auth.user.sub);
        return (
            <div>
                <div className="ui celled list">{this.renderList()}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.posts);
    return {
        posts: Object.values(state.posts),
        auth: state.auth,
        currentUserId: state.auth.user.sub,
    };
};

export default connect(mapStateToProps, { fetchPosts })(PostLists);
