import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal.js';
import { fetchPost, deletePost } from '../../actions/postActions';

class DeletePost extends React.Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
        console.log(this.props.match.params.id);
    }

    renderActions = () => {
        const { id } = this.props.match.params;
        return (
            <React.Fragment>
                <button
                    onClick={this.props.deletePost(id)}
                    className="ui button negative"
                >
                    Delete
                </button>
                <button Link to="/" className="ui button">
                    Cancel
                </button>
            </React.Fragment>
        );
    };

    renderContent = () => {
        if (!this.props.post) {
            return 'Are you sure you want to delete this stream?';
        } else {
            return `Are you sure you want to delete with title: ${this.props.post.title}`;
        }
    };

    render() {
        return <Modal>
            
        </Modal>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.posts[ownProps.match.params.id],
    };
};

export default connect(mapStateToProps, { fetchPost, deletePost })(DeletePost);
