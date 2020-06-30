import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, editPost } from '../../actions/postActions';

class EditPost extends React.Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }

    onSubmit = (e) => {
        const formValue = {
            title: this.refs.title.value,
            body: this.refs.body.value,
        };
        this.props.editPost(
            this.props.match.params.id,
            formValue,
            this.props.history
        );
        e.preventDefault();
    };

    render() {
        const post = _.pick(this.props.post, 'title', 'body');
        const title = post.title;
        const body = post.body;

        if (!this.props.post) {
            return <h1>Loading...</h1>;
        }
        return (
            <div className="ui form">
                <div className="field">
                    <label>Title</label>
                    <input defaultValue={title} ref="title" name="title" />
                </div>
                <div className="field">
                    <label>Description</label>
                    <textarea
                        defaultValue={body}
                        ref="body"
                        name="body"
                    ></textarea>
                </div>
                <button className="ui button" onClick={this.onSubmit}>
                    Submit
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.posts[ownProps.match.params.id],
    };
};

export default connect(mapStateToProps, { fetchPost, editPost })(EditPost);
