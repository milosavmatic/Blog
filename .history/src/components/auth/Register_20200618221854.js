import React from 'react';

class Register extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        password2: '',
        errors: {},
    };


onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

    render() {
        return (
            <div class="ui inverted segment">
                <div class="ui inverted form">
                    <div class="two fields">
                        <div class="field">
                            <div class="field">
                                <label>First Name</label>
                                <input
                                    placeholder="First Name"
                                    type="text"
                                    autoFocus
                                />
                                <label>Last Name</label>
                                <input placeholder="Last Name" type="text" />
                            </div>
                        </div>
                        <div class="field">
                            <label>Email</label>
                            <input placeholder="Email" type="email" />
                            <label>Password</label>
                            <input placeholder="Password" type="password" />
                        </div>
                    </div>
                    <div class="ui submit button">Submit</div>
                </div>
            </div>
        );
    }
}

export default Register;
