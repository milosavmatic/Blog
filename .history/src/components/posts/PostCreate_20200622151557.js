import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/index';

class PostCreate extends React.Component {
    state = {
        title: '',
        description: '',
        image: ''
    };

    onSubmit = (e) => {
        e.preventDefault();

        const formValue = {
            title: this.state.title,
            description: this.state.description,
        };
        this.props.createPost(formValue);
    };

    render() {
        const { title, description } = this.state;
        return (
            <div class="ui form">
                <div class="field">
                    <label>Title</label>
                    <input
                        value={title}
                        onChange={(e) =>
                            this.setState({ title: e.target.value })
                        }
                    />
                </div>
                <div class="field">
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) =>
                            this.setState({ description: e.target.value })
                        }
                    ></textarea>
                </div>
                <button class="ui button" type="submit" onClick={this.onSubmit}>
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
