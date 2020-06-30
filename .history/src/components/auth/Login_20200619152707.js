import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../store/actions/authActions';
import classnames from 'classnames';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        errors: {},
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/posts');
        }
        if (nextProps.errors) {
            this.setState({
                error: nextProps.errors,
            });
        }
    }

    onSubmit = () => {
        const userData = {
            email: this.state.email,
            password: this.state.password,
        };
        this.props.loginUser(userData);
    };

    render() {
        const { email, password, errors } = this.state;
        return (
            <div class="ui inverted segment">
                <div class="ui inverted form">
                    <div class="two fields">
                        <div class="field">
                            <label>Email</label>
                            <span className="red-text">
                                {errors.email}
                                {errors.emailnotfound}
                            </span>
                            <input
                                placeholder="Email"
                                type="email"
                                id="email"
                                value={email}
                                error={email.errors}
                                onChange={(event) =>
                                    this.setState({
                                        email: event.target.value,
                                    })
                                }
                                className={classnames('', {
                                    invalid:
                                        errors.email || errors.emailnotfound,
                                })}
                            />
                        </div>
                        <div class="field">
                            <label>Password</label>
                            className=
                            {classnames('', {
                                invalid:
                                    errors.password || errors.passwordincorrect,
                            })}
                            <input
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(event) =>
                                    this.setState({
                                        password: event.target.value,
                                    })
                                }
                                className={classnames("" , {
                                    invalid: 
                                    errors.password || errors.passwordincorrect
                                })}
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
