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
        console.log(nextProps);
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/');
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
            <div className="ui container">
                <div className="ui inverted form">
                    <form noValidate onClick={() => this.onSubmit()}>
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
                                    id="email"
                                    value={email}
                                    error={errors.email}
                                    onChange={(event) =>
                                        this.setState({
                                            email: event.target.value,
                                        })
                                    }
                                    className={classnames('', {
                                        invalid:
                                            errors.email ||
                                            errors.emailnotfound,
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
                                    id="password"
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
                        <div className="ui submit button">Submit</div>
                    </form>
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
