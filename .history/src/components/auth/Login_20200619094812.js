import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
    };
    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/posts');
        }
    }

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

    onSubmit = () => {
        alert(this.state.email + this.state.password)
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
                                type="text"
                                value={email}
                                error={errors.email}
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
                            <span className="red-text">
                                {errors.password}
                                {errors.passwordincorrect}
                            </span>
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
                                className={classnames('', {
                                    invalid:
                                        errors.password ||
                                        errors.passwordincorrect,
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
