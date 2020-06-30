import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import classnames from 'classnames';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        errors: {},
    };

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.errors)
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/');
        } else if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors.data.errors ||nextProps.errors.data.error ,
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
            <div className="ui inverted segment">
                <div className="ui inverted form">
                    <div className="two fields">
                        <div className="field">
                            <label>Email</label>
                            <span className="red-text">
                                {errors.email}
                                {errors.emailnotfound}
                            </span>
                            <input
                                placeholder="Email"
                                type="email"
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
                        <div className="field">
                            <label>Password</label>
                            <span className="red-text">
                                {errors.password}
                                {errors.passwordincorrect}
                            </span>
                            <input
                                placeholder="Password"
                                type="password"
                                error={errors.password}
                                value={password}
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
                    <div className="inline field"></div>
                    <div className="ui submit button" onClick={this.onSubmit}>
                        Sign In
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.errors);
    return {
        auth: state.auth,
        errors: state.errors,
    };
};
export default connect(mapStateToProps, { loginUser })(Login);
