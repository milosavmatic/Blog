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

    render() {
        const { email, password } = this.state;
        return (
            <form className="form-signin">
                <h2 className="form-signin-heading"> Please sign in </h2>
                <label htmlFor="inputEmail" className="sr-only">
                    {' '}
                    Email address
                </label>
                <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    required
                    autoFocus
                    value={email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                />
                <label htmlFor="inputPassword" className="sr-only">
                    {' '}
                    Password
                </label>
                <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) =>
                        this.setState({ password: e.target.value })
                    }
                />
                <button
                    className="btn btn-lg btn-primary btn-block"
                    type="button"
                    onClick={() => this.onSubmit()}
                >
                    {' '}
                    Sign in
                </button>
            </form>

            <div class="ui inverted segment">
  <div class="ui inverted form">
    <div class="two fields">
      <div class="field">
        <label>First Name</label>
        <input placeholder="First Name" type="text" autoFocus
                    value={email}
                    onChange={(e) => this.setState({ email: e.target.value })}/>
      </div>
      <div class="field">
        <label>Last Name</label>
        <input placeholder="Last Name" type="text"  value={password}
                    onChange={(e) =>
                        this.setState({ password: e.target.value })
                    }/>
      </div>
    </div>
    <div class="inline field">
    </div>
    <div class="ui submit button" onClick={() => this.onSubmit()}>Submit</div>
  </div>
</div>
        );
    }
}

export default SignIn;
