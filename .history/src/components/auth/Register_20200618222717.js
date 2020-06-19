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
                                    onChange={this.onChange}
                                    value={name}
                                    placeholder="Name"
                                    type="text"
                                    autoFocus
                                />
                                <label>Password</label>
                                <input onChange={this.onChange} value={password} placeholder="Password" type="password" />
                            </div>
                        </div>
                        <div class="field">
                            <label>Email</label>
                            <input placeholder="Email" type="email" onChange={this.onChange} value={email}/>
                            <label>Password</label>
                            <input placeholder="Password" type="password" onChange={this.onChange} value={password2} />
                        </div>
                    </div>
                    <div class="ui submit button">Submit</div>
                </div>
            </div>
        );
    }
}

export default Register;
