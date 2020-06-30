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
                    padding: '16px',
                    position: 'absolute',
                    top: `16px`,
                    right: '16px',
                    zIndex: '999px',
                    transition: 'top 0.5s ease',
                }}
            >
                Miki
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.notifications.notifications);
    return {
        notifications: state.notifications,
    };
};

export default connect(mapStateToProps, { fetchNotifications })(Notifications);
