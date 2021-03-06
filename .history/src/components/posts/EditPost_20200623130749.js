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
            title: this.refs.title.value,
            body: this.refs.body.value,
        };
        this.props.editPost(
            this.props.match.params.id,
            formValue,
            this.props.history
        );
        e.preventDefault();
        console.log(formValue);
    };

    handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
    render() {
        const post = _.pick(this.props.post, 'title', 'body');
        const titleRef = post.title;
        const bodyRef = post.body;
        const { title, body } = this.state;
        if (!this.props.post) {
            return <h1>Loading...</h1>;
        }
        return (
            <div className="ui form">
                <div className="field">
                    <label>Title</label>
                    <input
                        value={title}
                        onChange={this.handleInputChange
                        }
                        name="titleRef"
                        ref="titleRef"
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
