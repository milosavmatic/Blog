import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import Modal from '../Modal';

import { deleteComments, fetchComments } from '../../actions/commentsActions';
import { Link } from 'react-router-dom';

class CommentsDelete extends React.Component {
    componentDidMount() {
        this.props.fetchComments(this.props.match.params.id);
    }

    renderActions = () => {
        const { id } = this.props.match.params;
        console.log(id);
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
        if (!this.props.comments) {
            return 'Are you sure you want to delete this comment?';
        } else {
            return `Are you sure you want to delete with title: ${this.props.comments.body}`;
        }
    };

    render() {
        console.log(this.props.comments);
        return (
            <Modal
                title="Posts Delete"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state.comments.comment);
    return {
        deleteComments: state.comments.deleteComments,
    };
};

export default connect(mapStateToProps, { deleteComments  })(
    CommentsDelete
);
