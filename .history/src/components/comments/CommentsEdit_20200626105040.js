import React from 'react';
import connect from 'react-redux';
import { editComments } from '../../actions/commentsActions';

class CommentsEdit extends React.Component {
    state = {
        isInEditMode: false,
        body: ''
    };

    updateComponentValue = () => {
        this.setState({
            isInEditMode: false,
            body: this.refs.theTextInput.value,
        });
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
    };
};

export default connect(mapStateToProps, { editComments })(CommentsEdit);
