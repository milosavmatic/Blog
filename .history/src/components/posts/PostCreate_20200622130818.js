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

export default PostCreate;
