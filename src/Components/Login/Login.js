import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser, registerUser, getSession} from '../../redux/reducers/userReducer';
import {Redirect} from 'react-router-dom';
import '../styles/Login/Login.sass';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    login = () => {
        const {username, password} = this.state;
        this.props.loginUser({username, password});
        this.props.getSession();
    }
    
    register = () => {
        const {username, password} = this.state;
        this.props.registerUser({username, password});
        this.props.getSession()
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        if(this.props.user_id){
            return <Redirect to='/dashboard'/>
        }
        return (
            <div className="login-main">
                <section>
                    <img src="https://github.com/DevMountain/simulation-3/blob/master/assets/helo_logo.png?raw=true" alt="logo"></img>
                    <h1>Helo</h1>
                </section>
                <section>
                    <div>
                        <label>Username:</label>
                        <input
                            name="username"
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            name="password"
                            onChange={this.handleChange}
                        ></input>
                    </div>
                </section>
                <section>
                    <button onClick={this.login}>Login</button>
                    <button onClick={this.register}>Register</button>
                </section>

            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id
    }
}

export default connect(mapStateToProps, {
    loginUser,
    registerUser,
    getSession
})(Login)