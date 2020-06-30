import React from 'react';

class Notifications extends React.Component {
    render() {
        return (
            <div
                style={{
                    backgroundColor: '#444',
                    color: 'white',
                    padding: '6px',
                    position: 'absolute',
                    top: '6px',
                    right: '6px',
                    zIndex: 999,
                    transition: 'top 0.5s ease',
                }}
            >
                {' '}
                Example text some
            </div>
        );
    }
}

export default Notifications;
