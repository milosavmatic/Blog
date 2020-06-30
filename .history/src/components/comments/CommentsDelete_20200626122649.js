import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';

import { deleteComments } from '../../actions/commentsActions';
import { Link } from 'react-router-dom';

class CommentsDelete extends React.Component {
    renderActions = () => {
        const { id } = this.props.match.params;
        return (
            <React.Fragment>
                <button
                    onClick={() =>
                        this.props.deleteComments(id, this.props.history)
                    }
                    className="ui button negative"
                >
                    Delete
                </button>
                <Link to="/" className="ui button">
                    Cancel
                </Link>
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
        return (
            <Modal
                title="Posts Delete"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => this.props.history.push('/')}
            />
        );
    }
}

export default connect(null, { deleteComments })(CommentsDelete);
