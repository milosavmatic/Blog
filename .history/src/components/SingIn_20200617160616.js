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

    handleFieldChange = event => {
    const { value, name } = event.target;

    this.setState({
      ...this.state,
     
        [name]: value
      
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
                                value={this.state.email}
                                onChange={(event) =>
                                    this.setState({
                                        email: event.target.value,
                                    })
                                }
                            />
                        </div>
                        <div class="field">
                            <label>Password</label>
                            <input
                                placeholder="Password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange}
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
