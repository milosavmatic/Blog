import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/index';

class PostCreate extends React.Component {
    state = {
        title: '',
        description: '',
        image: null,
    };

    onSubmit = (e) => {
        e.preventDefault();

        const formValue = {
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
        };
        this.props.createPost(formValue);
    };
    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img),
            });
        }
    };

    render() {
        const { title, description, image } = this.state;
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
                    <div>
                        <img src={image} style={{ width: 500, height: 500 }} />
                        <h1>Select Image</h1>
                        <input
                            type="file"
                            name="myImage"
                            onChange={this.onImageChange}
                        />
                    </div>
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
