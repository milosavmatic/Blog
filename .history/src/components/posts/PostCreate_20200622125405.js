import React from 'react';

class PostCreate extends React.Component {
    state = {
        title: '',
        description: '',
    };

    onSubmit = (e) => {
        
    }

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
                    <label>Descrption</label>
                    <textarea
                        value={description}
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
