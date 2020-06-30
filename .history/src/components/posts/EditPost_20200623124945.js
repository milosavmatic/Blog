import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, editPost } from '../../actions/postActions';

class EditPost extends React.Component {
    state = {
        title: '',
        body: '',
    };
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }

    onSubmit = (e) => {
        const formValue = {
            title: this.refs.value.title,
            body: this.refs.value.body,
        };
        this.props.editPost(
            this.props.match.params.id,
            formValue,
            this.props.history
        );
        e.pre
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
                    <input
                        value={title}
                        onChange={(e) =>
                            this.setState({ title: e.target.value })
                        }
                        name="title"
                        ref="title"
                    />
                </div>
                <div className="field">
                    <label>Description</label>
                    <textarea
                        value={body}
                        onChange={(e) =>
                            this.setState({ body: e.target.value })
                        }
                        ref="body"
                        name="body"
                    ></textarea>
                </div>
                <button
                    className="ui button"
                    type="submit"
                    onClick={this.onSubmit}
                >
                    Submit
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps.match.params.id);
    return {
        post: state.posts[ownProps.match.params.id],
    };
};

export default connect(mapStateToProps, { fetchPost, editPost })(EditPost);
