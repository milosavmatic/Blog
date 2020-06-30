import React from 'react';

class EditPost extends React.Component {
    state = {
        title: '',
        body: '',
    };

    render() {
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

export default EditPost;
