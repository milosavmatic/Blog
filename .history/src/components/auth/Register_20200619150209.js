import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../store/actions/authActions';
import classnames from 'classnames';

class Register extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        errors: {},
    };

    onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
        };
        console.log(newUser);
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
            <div class="ui inverted segment">
                <div class="ui inverted form">
                    <div class="two fields">
                        <div class="field">
                            <div class="field">
                                <label>Name</label>

                                <input
                                    value={name}
                                    placeholder="Name"
                                    type="text"
                                    autoFocus
                                    onChange={(e) =>
                                        this.setState({ name: e.target.value })
                                    }
                                />
                                <label>Password</label>

                                <input
                                    value={password}
                                    placeholder="Password"
                                    type="password"
                                />
                            </div>
                        </div>
                        <div class="field">
                            <label>Email</label>
                            <span className="red-text">{errors.email}</span>
                            <input
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    this.setState({ email: e.target.value })
                                }
                            />
                            <label>Password</label>

                            <input
                                placeholder="Password"
                                type="password"
                                value={password_confirmation}
                                onChange={(e) =>
                                    this.setState({
                                        password_confirmation: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div class="ui submit button" onClick={this.onSubmit}>
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

export default connect(mapStateToProps)(Register);
