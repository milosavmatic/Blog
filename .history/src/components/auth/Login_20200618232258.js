import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import classnames from 'classnames';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        error: {},
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/posts'); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors,
            });
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password,
        };
        this.props.loginUser(userData);
    };

    render() {
        const { email, password, error } = this.state;
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
                            <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
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
                                      className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
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

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
