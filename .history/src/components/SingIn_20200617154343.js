import React from 'react';

class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
    };

    onSubmit = () => {
        alert(
            `Your password is ${this.state.password}, your email is ${this.state.email}`
        );
    };

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
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
                                autoFocus
                                value={email}
                                onChange={(event) =>
                                    this.setState({ emails: event.target.value })
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
                                        password: event.target.password,
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

export default SignIn;
