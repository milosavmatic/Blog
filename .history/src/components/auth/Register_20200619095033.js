import React from 'react';
import { connect } from 'react-redux';


class Register extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        password2: '',
        errors: {},
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
                                
                                value={password2}
                                onChange={(e) =>
                                    this.setState({ password2: e.target.value })
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
    
});

export default connect(mapStateToProps)(Register);
