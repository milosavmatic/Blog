import React from 'react';
import { connect } from 'react-redux';
import { postComments, fetchComments } from '../../actions/commentsActions';

class CommentsForm extends React.Component {
    state = {
        body: '',
    };

    componentDidMount() {
        this.props.fetchComments(this.props.post_id);
        
       
    }

    

    onSubmit = (e) => {
        e.preventDefault();
        const commentsData = {
            body: this.state.body,
            post_id: this.props.post_id,
            parent_id: 0,
        };

        console.log(commentsData);
        this.props.postComments(commentsData);
    };
    render() {
      
        return (
       
                <form className="ui reply form">
                    <div className="field">
                        <textarea
                            value={this.state.body}
                            onChange={(e) =>
                                this.setState({ body: e.target.value })
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


export default connect(null, { postComments, fetchComments })(
    CommentsForm
);
