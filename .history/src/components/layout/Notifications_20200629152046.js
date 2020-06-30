import React from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from '../../actions/notificationsActions';

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            top: -100,
        };
        this.timeout = null;
    }

    componentDidMount() {
        this.props.fetchNotifications();
        this.onShow();
    }

    render() {
        return (
            <div
                style={{
                    backgroundColor: '#444',
                    color: 'white',
                    padding: '16px',
                    position: 'absolute',
                    top: `${this.state.top}px`,
                    right: '16px',
                    zIndex: '999px',
                    transition: 'top 0.5s ease',
                }}
            >
                <button onClick={this.setState({ top: 16 })}>X</button>
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
