import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';

import { deleteComments } from '../../actions/commentsActions';
import { Link } from 'react-router-dom';

class CommentsDelete extends React.Component {
    renderActions = () => {
        const { id } = this.props.match.params;
        console.log(id);
        return (
            <React.Fragment>
                <button
                    onClick={() => this.props.deleteComments(id)}
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
            return `Are you sure you want to delete with title: ${this.props.deleteComments.body}`;
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

const mapStateToProps = (state) => {
    console.log(state.comments);
    return {
        deleteComments: state.deleteComments,
    };
};

export default connect(mapStateToProps, { deleteComments })(CommentsDelete);
