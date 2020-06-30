import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import classnames from 'classnames';

class Register extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        errors: {},
    };

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors.errors,
            });
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
        };

        this.props.registerUser(newUser, this.props.history);
    };

    render() {
        const {
            errors,
            name,
            email,
            password,
            password_confirmation,
        } = this.state;
        return (
            <div className="ui inverted segment">
                <div className="ui inverted form">
                    <div className="two fields">
                        <div className="field">
                            <div className="field">
                                <label>Name</label>
                                <span className="red-text">{errors.name}</span>
                                <input
                                    value={name}
                                    error={errors.name}
                                    placeholder="Name"
                                    type="text"
                                    
                                    onChange={(e) =>
                                        this.setState({ name: e.target.value })
                                    }
                                    className={classnames('', {
                                        invalid: errors.name,
                                    })}
                                />
                                <label>Password</label>
                                <span className="red-text">
                                    {errors.password}
                                </span>
                                <input
                                    value={password}
                                    error={errors.password}
                                    placeholder="Password"
                                    type="password"
                                    onChange={(e) =>
                                        this.setState({
                                            password: e.target.value,
                                        })
                                    }
                                    className={classnames('', {
                                        invalid: errors.password,
                                    })}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <span className="red-text">{errors.email}</span>
                            <input
                                placeholder="Email"
                                type="email"
                                value={email}
                                error={this.props.errors}
                                onChange={(e) =>
                                    this.setState({ email: e.target.value })
                                }
                                className={classnames('', {
                                    invalid: errors.email,
                                })}
                            />
                            <label>Password Confirmation</label>
                            <span className="red-text">
                                {errors.password_confirmation}
                            </span>
                            <input
                                placeholder="Password"
                                type="password"
                                value={password_confirmation}
                                error={errors.password_confirmation}
                                onChange={(e) =>
                                    this.setState({
                                        password_confirmation: e.target.value,
                                    })
                                }
                                className={classnames('', {
                                    invalid: this.props.errors.data,
                                })}
                            />
                        </div>
                    </div>
                    <div className="ui submit button" onClick={this.onSubmit}>
                        Submit
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        errors: state.errors,
    };
};

export default connect(mapStateToProps, { registerUser })(Register);
