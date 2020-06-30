import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal.js';
import { fetchPost, deletePost } from '../../actions/postActions';

class DeletePost extends React.Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }


    renderActions = () => {
        const {id} = this.props.match.params
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
