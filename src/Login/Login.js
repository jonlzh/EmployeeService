import React from 'react'
import { Redirect } from "react-router-dom";
class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            email: "",
            password: "",
            msg: "",
        }

        //must bind the event handlers to use it
        //have to use this way instead of the form onSubmit method as
        //onSubmit method will override the url with the input value making it not redirect properly
        this.handleLogin = this.handleLogin.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    //event handler
    clearData(){
        this.setState({
            email: "",
            password: "",
            msg: "",
        })
    }
    handleEmail(event) {
        this.setState({ email: event.target.value });
    }
    handlePassword(event) {
        this.setState({ password: event.target.value });
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            //pathname to set the path to be redirect to
            //state: to pass the email value to ShowOwnDetails.js
            return <Redirect to={{
                pathname: '/index',
                state: { email: this.state.email }
            }}
            />
        }
    }
    handleLogin(event) {
        var newURL = "http://localhost:8080/EmployeeService/rest/EmployeeService/Login/" +
            this.state.email + "/" +
            this.state.password;

        let reqOptions = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Origin': '*'
            }
        };
        let url = newURL;
        fetch(url, reqOptions)
            // .then(res => res.text())          // convert to plain text
            // .then(text => console.log("asd: " + text))  // then log it out
            .then(res => res.json())
            .then((data) => {
                try 
                {
                    if (data[0].msg.string === "Login Success!") 
                    {
                        this.setState({ redirect: true });
                    }
                    else if (data[0].msg.string === "Retry!"){
                        this.clearData();
                        this.setState ({ msg: data[0].msg.string });
                    }
                } catch (error) 
                {
                    this.clearData();
                    this.setState({ msg: "Fields cannot be blanks!" });
                    console.log(error);
                }

            })
            .catch(console.log);
    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <h2>Login</h2>
                <form>
                    <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail} /><br />
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword} /><br />
                    <button type="button" onClick={this.handleLogin}>Login</button>
                    <p>{this.state.msg}</p>
                </form>

            </div>
        );
    }
}

export default Login;