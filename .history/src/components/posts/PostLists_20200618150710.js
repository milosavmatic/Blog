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
        const { posts } = this.props;
        return posts.map((post) => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </div>
                    
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
    console.log(state.posts);
    return {
        posts: Object.values(state.posts),
    };
};

export default connect(mapStateToProps, { fetchPosts })(PostLists);
