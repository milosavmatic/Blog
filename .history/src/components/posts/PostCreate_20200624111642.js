import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions';

class PostCreate extends React.Component {
    state = {
        title: '',
        body: '',
        image: null,
        imageUrl: null,
    };

    onSubmit = (e) => {
        e.preventDefault();
        var formValue = new FormData();
        formValue.append('title', this.state.title);
        formValue.append('body', this.state.body);
        formValue.append('image', this.state.image);

        console.log(this.props.createPost(formValue, this.props.history));
    };

    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: img,
                imageUrl: URL.createObjectURL(img),
            });
            console.log('image:' + this.state.image);
            console.log('image:' + this.state.imageUrl);
        }
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
                    <img
                        src={this.state.imageUrl}
                        alt={'Ale'}
                        style={{ width: 500, height: 500 }}
                    />
                    <h1>Select Image</h1>
                    <input
                        type="file"
                        name="myImage"
                        onChange={this.onImageChange}
                    />
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
