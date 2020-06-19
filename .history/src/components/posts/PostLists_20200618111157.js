import React from 'react';
import { connect } from 'react-redux';
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
        console.log(this.props.posts);
        return (
            <div>
                <div className="ui celled list">{this.renderList()}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.data,
        error: state.posts.error,
        isLoading: state.posts.isLoading,
    };
};

const mapDispatchToProps = {
    fetchPosts,
};

export default connect(mapStateToProps,mapDispatchToProps)(PostList);
