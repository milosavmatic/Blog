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
                            <label>Password</label>
                            <input placeholder="Password" type="text" />
                        </div>
                            <label>Email</label>
                            <input placeholder="Email" type="text" autoFocus />
                        </div>
                        <div class="field">
                            <label>Password</label>
                            <input placeholder="Password" type="text" />
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

export default SignUp;
