import React from 'react';

class PostCreate extends React {
state={
    title: '',
    description: ''
}



    render() {
        const { title, description} = this.state
        return (
            <div class="ui form">
                <div class="field">
                    <label>Title</label>
                    <input 
                        value
                    />
                </div>
                <div class="field">
                    <label>Descrption</label>
                    <textarea></textarea>
                </div>
            </div>
        );
    }
}

export default PostCreate;
