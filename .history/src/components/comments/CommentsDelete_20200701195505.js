import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
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
                        this.props.deleteComments(id, this.props.history.push(`/posts/${this.props.match.params.id}`))
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
        if (!this.props.comments) {
            return 'Are you sure you want to delete this comment?';
        } else {
            return `Are you sure you want to delete with title: ${this.props.comments.body}`;
        }
    };

    render() {
        return (
            <Modal
                title="Comments Delete"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        deleteComments: state.comments.deleteComments,
    };
};

export default connect(mapStateToProps, { deleteComments })(CommentsDelete);
