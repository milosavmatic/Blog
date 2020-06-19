import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        console.log(this.props.posts);
        return (
            <div>
                <div className="ui celled list">miki</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
