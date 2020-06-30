import React from 'react';

class PostCreate extends React.Component {
    state = {
        title: '',
        description: '',
    };

    onSubmit = (e) => {
        e.preventDefault();

        const formValue = {
            title: this.state.title,
            description: this.state.description,
        };
        console.log(formValue);
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
                        name={description}
                        onChange={(e) => e.target.value}
                    ></textarea>
                </div>
                <button class="ui button" type="submit">
                    Submit
                </button>
            </div>
        );
    }
}

export default PostCreate;
