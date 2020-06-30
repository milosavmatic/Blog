import React from 'react';

class Notifications extends React.Component {
    render() {
        return (
            <div
                style={{
                    backgroundColor: '#444',
                    color: 'white',
                    padding: '16px',
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    z-index:  '999'
                }}
            ></div>
        );
    }
}

export default Notifications;
