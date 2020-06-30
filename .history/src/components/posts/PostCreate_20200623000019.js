import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/index';

class PostCreate extends React.Component {
    state = {
        title: '',
        body: '',
    };

    onSubmit = (e) => {
        e.preventDefault();
        const formValue = {
            title: this.state.title,
            body: this.state.body,
        };

        console.log(this.props.createPost(formValue, this.props.history));
    };

    render() {
        const { title, body } = this.state;
        return (
            <div className="ui form">
                <div className="field">
                    <label>Title</label>
                    <input
                        value={title}
                        onChange={(e) =>
                            this.setState({ title: e.target.value })
                        }
                    />
                </div>
                <div className="field">
                    <label>Description</label>
                    <textarea
                        value={body}
                        onChange={(e) =>
                            this.setState({ body: e.target.value })
                        }
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

const mapStateToProps = (state) => ({
    posts: state.posts,
});

export default connect(mapStateToProps, { createPost })(PostCreate);
