import React from 'react';

class Register extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        password2: '',
        errors: {},
    };

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        };
        console.log(newUser);
    };

    render() {
        const { errors, name, email, password, password2 } = this.state;

        return (
            <div class="ui inverted segment">
                <div class="ui inverted form">
                    <div class="two fields">
                        <div class="field">
                            <div class="field">
                                <label>Name</label>
                                <input
                                    value={name}
                                    error={errors.name}
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
                                    error={errors.password}
                                    placeholder="Password"
                                    type="password"
                                    onChange={(e) =>
                                        this.setState({
                                            password: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div class="field">
                            <label>Email</label>
                            <input
                                placeholder="Email"
                                type="email"
                                error={errors.email}
                                onChange={(e) =>
                                    this.setState({ email: e.target.value })
                                }
                                value={email}
                            />
                            <label>Password</label>
                            <input
                                placeholder="Password"
                                type="password"
                                error={errors.password2}
                                value={password2}
                                 onChange={(e) =>
                                    this.setState({ password2: e.target.value })
                                }
                            />
                        </div>
                    </div>
                    <div class="ui submit button" onClick={() => this.onSubmit}>
                        Submit
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
