import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
    };

    onSubmit = () => {
        alert(this.state.email + this.state.password);
    };

    render() {
        const { email, password, errors } = this.state;
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
                                error={errors.password}
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

const mapStateToProps = (state) => ({}
);
export default connect(mapStateToProps, { loginUser })(Login);
