import React from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from '../../actions/notificationsActions';

class Notifications extends React.Component {
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
                    top: '6px',
                    right: '6px',
                    zIndex: '999px',
                    transition: 'top 0.5s ease',
                }}
            >
                Example text some
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        notifications: state.notifications,
    };
};

export default connect(mapStateToProps, { fetchNotifications })(Notifications);
