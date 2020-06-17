import React from 'react';

class SignUp extends React.Component {
    render() {
        return (
            <div
                class="ui inverted segment"
                style={{ backgroundColor: '#2e2d35', height: 1000 }}
            >
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
                                <label>Email</label>
                                <input placeholder="Email" type='email' />
                            </div>
                        </div>
                        <div class="field">
                            <label>Last Name</label>
                            <input placeholder="Last Name"  />
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

export default SignUp;
