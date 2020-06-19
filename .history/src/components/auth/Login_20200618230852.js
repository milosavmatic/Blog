import React from 'react';
import connect from 'react-redux'

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        error: {},
    };

    onSubmit = () => {
        alert(
            `Your password is ${this.state.password}, your email is ${this.state.email}`
        );
    };

    render() {
        const { email, password, error } = this.state;
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
                                error={error.email}
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
                                error={error.password}
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

export default Login;
