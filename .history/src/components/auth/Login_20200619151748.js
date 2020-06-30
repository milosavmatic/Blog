import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../store/actions/authActions';
import classnames from 'classnames';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        errors: {}
    };

    onSubmit = () => {
        const userData = {
            email: this.state.email,
            password: this.state.password,
        };
        this.props.loginUser(userData);
    };

    render() {
        const { email, password } = this.state;
        return (
            <div class="ui inverted segment">
                <div class="ui inverted form">
                    <div class="two fields">
                        <div class="field">
                            <label>Email</label>
                            <input
                                placeholder="Email"
                                type="text"
                                value={email}
                                onChange={(event) =>
                                    this.setState({
                                        email: event.target.value,
                                    })
                                }
                            />
                        </div>
                        <div class="field">
                            <label>Password</label>

                            <input
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(event) =>
                                    this.setState({
                                        password: event.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div class="inline field"></div>
                    <div
                        class="ui submit button"
                        onClick={() => this.onSubmit()}
                    >
                        Submit
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(Login);
