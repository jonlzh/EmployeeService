import React from 'react'
import {
    withRouter,
    Redirect,
    BrowserRouter,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation
} from "react-router-dom";
import ShowAllEmployee from '../ShowAllEmployee/ShowAllEmployee';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            msg: "",
            email: "",
            password: "",
        }

        //must bind the event handlers to use it
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
            return <Redirect to='/index' />
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
            // .then(text => console.log(text))  // then log it out
            .then(res => res.json())
            .then((data) => {
                this.setState({ EmployeesArray: data });
                // alert(url);
                this.setState({ redirect: true });
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
                    <div>
                    </div>
            </div>
        );
    }
}

export default Login;