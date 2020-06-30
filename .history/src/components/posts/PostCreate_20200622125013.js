import React from 'react';

class PostCreate extends React {
    state = {
        title: '',
        description: '',
    };

    render() {
        const { title, description } = this.state;
        return (
            <div class="ui form">
                <div class="field">
                    <label>Title</label>
                    <input value={title} />
                </div>
                <div class="field">
                    <label>Descrption</label>
                    <textarea value={description}></textarea>
                </div>
            </div>
        );
    }
}

export default PostCreate;
