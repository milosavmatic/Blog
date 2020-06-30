import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../actions/postActions';

class DeletePost extends React.Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id)
    }
    render() {
        return <div></div>;
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.posts[this.props.match.params.id],
    };
};

export default connect(mapStateToProps, { fetchPost, deletePost })(DeletePost);
