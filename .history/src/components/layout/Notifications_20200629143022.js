import React from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from '../../actions/notificationsActions';

class Notifications extends React.Component {
    state = {
        top: -100,
    };

    componentDidMount() {
        this.props.fetchNotifications();
    }

    render() {
        return (
            <div
                style={{
                    backgroundColor: '#444',
                    color: 'white',
                    padding: '6px',
                    position: 'absolute',
                    top: `${this.state.top}px`,
                    right: '6px',
                    zIndex: '999px',
                    transition: 'top 0.5s ease',
                }}
            >
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.notifications)
    return {
        notifications: state.notifications,
    };
};

export default connect(mapStateToProps, { fetchNotifications })(Notifications);
