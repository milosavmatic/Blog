import React from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from '../../actions/notificationsActions';


class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            top: 16,
        };
        this.timeout = null;
    }

    componentDidMount() {
        this.props.fetchNotifications();
    }

    render() {
        if (this.props.notifications) {
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
                    <button onClick={() => this.setState({ top: -1000 })}>
                        X
                    </button>
                    {this.props.notifications.map((notification) => {
                        return (
                            <div key={notification.id}>
                                {`Korisniku ${notification.data.user.name} je komentarisan ovaj`}{' '}
                                <a href={`/posts/${notification.data.post}`}>
                                    post
                                </a>
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    console.log(Object.values(state.notifications.notification).map((n) => n));
    return {
        notifications: Object.values(state.notifications.notification),
    };
};

export default connect(mapStateToProps, { fetchNotifications })(Notifications);
