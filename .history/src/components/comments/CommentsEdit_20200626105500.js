import React from 'react';
import connect from 'react-redux';
import { editComments } from '../../actions/commentsActions';

class CommentsEdit extends React.Component {
    state = {
        isInEditMode: false,
        body: '',
    };

    changeEditMode = () => {
        this.setState({
            isInEditMode: !this.state.isInEditMode,
        });
        console.log(this.state.isInEditMode);
    };

    updateComponentValue = () => {
        this.setState({
            isInEditMode: false,
            body: this.refs.theTextInput.value,
        });
        const {id} = this.props.comments
        const commentsData = {
            body: this.state.body,
        };

        this.props.editComments(commentsData, id);
    };

    onSubmit = (e) => {
        e.preventDefault();
        const commentsData = {
            body: this.state.body,
            post_id: this.props.post_id,
            parent_id: 0,
        };
        this.props.postComments(commentsData);
    };

    render() {
        return (
            <div>
                {this.state.isInEditMode ? (
                    <div className="text">
                        <input
                            defaultValue={this.state.body}
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
        comments: state.comments.comment
    };
};

export default connect(mapStateToProps, { editComments })(CommentsEdit);
