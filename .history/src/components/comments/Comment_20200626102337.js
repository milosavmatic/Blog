import React from 'react';

class Comment extends React.Component {
    state = {
        isInEditMode: false,
    };
    changeEditMode = () => {
        this.setState({
            isInEditMode: !this.state.isInEditMode,
        });
        console.log(this.state.isInEditMode);
    };
updateComponentValue = () => {
    this.setState({
        isInEditMode: false
    })
   const body = this.props.body 
}


    render() {
        return (
            <div className="comment">
                <p className="avatar">
                    <img
                        src="https://cdn.shortpixel.ai/spai/w_300+q_lossy+ret_img+to_webp/https://i1.wp.com/www.krug99.ba/wp-content/uploads/2015/06/white-camera-icon-png.png?fit=300%2C252&ssl=1"
                        alt="icon"
                    />
                </p>
                <div className="content">
                    <p className="author"></p>
                    <div className="metadata">
                        <div className="date">{this.props.time}</div>
                    </div>
                    {this.state.isInEditMode ? (
                        <div className="text">
                            <input defaultValue={body} />
                            <button onClick={this.changeEditMode}>X</button>
                        </div>
                    ) : (
                        <div onDoubleClick={this.changeEditMode}>
                            {this.props.body}
                        </div>
                    )}
                    <div className="actions">
                        <a className="reply" href="/#">
                            Reply
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comment;
