import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/commentsActions';

class CommentsList extends React.Component {
    componentDidMount() {
        this.props.fetchComments(this.props.post_id);
    }

    render() {
        const {comments} = this.props
        return (
            <div>
            {}
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        comments: state.comments,
    };
};

export default connect(mapStateToProps, { fetchComments })(CommentsList);
