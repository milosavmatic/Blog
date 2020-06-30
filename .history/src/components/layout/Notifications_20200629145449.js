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

    showNotification = () => {
        this.setState({
            top: 16
        }), () => {
            this.timeout 
        }
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
                {this.props.notifications}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(
        Object.values(state.notifications.notification).map((n) => n.type)
    );
    return {
        notifications: Object.values(state.notifications.notification).map(
            (n) => n.data.user.name
        ),
    };
};

export default connect(mapStateToProps, { fetchNotifications })(Notifications);
