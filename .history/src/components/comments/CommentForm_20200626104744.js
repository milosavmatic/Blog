import React from 'react';
import { connect } from 'react-redux';
import { postComments } from '../../actions/commentsActions';

class CommentsForm extends React.Component {
    state = {
        body: '',
        isInEditMode: false,
    };

    changeEditMode = () => {
        this.setState({
            isInEditMode: !this.state.isInEditMode,
        });
        console.log(this.state.isInEditMode);
    };
  
    render() {
        return (
            <div>
                <form className="ui reply form">
                    <div className="field">
                        <textarea
                            value={this.state.body}
                            onChange={(event) =>
                                this.setState({ body: event.target.value })
                            }
                        ></textarea>
                    </div>
                    <button
                        className="ui primary submit labeled icon button"
                        onClick={this.onSubmit}
                    >
                        <i className="icon edit"></i> Add Comment
                    </button>
                </form>
            </div>
        );
    }
}

export default connect(null, { postComments })(CommentsForm);
