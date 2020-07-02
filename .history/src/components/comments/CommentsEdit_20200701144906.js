import React from 'react';
import { connect } from 'react-redux';
import { editComments, fetchComments } from '../../actions/commentsActions';

class CommentsEdit extends React.Component {
    state = {
        isInEditMode: false,
        body: '',
    };

    changeEditMode = () => {
        return (
    parseInt(this.props.currentUserId) === this.props.user_id ?
        this.setState({
            isInEditMode: !this.state.isInEditMode,
        }) : null
        )
    };

    updateComponentValue = () => {
        this.setState({
            isInEditMode: false,
            body: this.refs.theTextInput.value,
        });
        const { id } = this.props;
        const body = {
            body: this.state.body || this.props.body,
        };

        this.props.editComments(body, id);
    };

    render() {
        return (
            <div>
                {this.state.isInEditMode ? (
                    <div className="text">
                        <input
                            defaultValue={this.props.body}
                            ref="theTextInput"
                            onChange={(e) =>
                                this.setState({ body: e.target.value })
                            }
                        />
                        <button onClick={this.changeEditMode}>X</button>
                        <button onClick={this.updateComponentValue}>Ok</button>
                    </div>
                ) : (
                    <div onDoubleClick={this.changeEditMode}>
                        {this.props.body}
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        editComments: state.comments.editComments,
        currentUserId: state.auth.user.sub
    };
};

export default connect(mapStateToProps, { editComments, fetchComments })(
    CommentsEdit
);
