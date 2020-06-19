import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';

class PostLists extends React.Component {
    componentDidMount() {
        const { fetchPosts } = this.props;
        fetchPosts();
    }

    renderList = () => {
         

    render() {
        const { post } = this.props
        console.log(this.props.posts);
        return (
            <div>
            <h1>Posts</h1>
                <div className="ui celled list">{posts.map((post) => {
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
    };}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.posts);
    return {
        posts: state.posts,
        error: state.error,
        isLoading: state.isLoading,
    };
};

export default connect(mapStateToProps, { fetchPosts })(PostLists);
