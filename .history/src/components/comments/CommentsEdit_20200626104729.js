import React from 'react';
import connect from 'react-redux';
import { EditComments } from '../../actions/commentsActions';

class CommentsEdit extends React.Component {
state ={
    isInEditMode: false
}


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

export default CommentsEdit;
