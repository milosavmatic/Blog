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
                                <input placeholder="First Name" type="text" />
                            </div>
                            <div class="field">
                                <label>Last Name</label>
                                <input placeholder="Last Name" type="text" />
                            </div>
                            <div class="field">
                                <label>First Name</label>
                                <input placeholder="First Name" type="text" />
                                <label>Email</label>
                                <input
                                    placeholder="Email"
                                    type="text"
                                    autoFocus
                                />
                            </div>
                        </div>
                        <div class="field">
                        <label>Last Name</label>
                                <input placeholder="Last Name" type="text" />
                            <label>Password</label>
                            <input placeholder="Password" type="text" />
                        </div>
                    </div>
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

export default SignUp;
