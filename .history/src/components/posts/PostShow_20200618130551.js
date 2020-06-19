import React from 'react';

class PostShow extends React.Component {
    render() {
    return (
        <div class="ui centered card" style={{ width: 500, marginTop: 30 }}>
            <div class="image">
                <img src={props.image} alt="Card cap" />
            </div>
            <div>
                <h1>{props.title}</h1>
            </div>
            
        </div>
    );
};
}

export default PostItem;
