import React from 'react'
import { Redirect } from "react-router-dom";
// import ShowAllEmployee from '../ShowAllEmployee/ShowAllEmployee';
import ShowOwnDetails from '../ShowOwnDetails/ShowOwnDetails';
class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            email: "",
            password: "",
            EmployeesArray: [],
        }

        //must bind the event handlers to use it
        //have to use this way instead of the form onSubmit method as 
        //onSubmit method will override the url with the input value
        this.handleLogin = this.handleLogin.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    //event handler
    handleEmail(event) {
        this.setState({ email: event.target.value });
    }
    handlePassword(event) {
        this.setState({ password: event.target.value });
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/own' />
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
                    if (data[0].msg.string === "Retry!") {
                        alert("retry");
                    }
                    else if(data[0].msg.string === "Login Success!")
                    {
                        this.setState({ EmployeesArray: data });
                        this.setState({ redirect : true});
                        //parse value to showowndetails so they can render
                    }
                } catch (error) {
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
                </form>

            </div>
        );
    }
}

export default Login;