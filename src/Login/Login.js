import React from 'react'

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }

        //must bind the event handlers to use it
        this.handleLogin = this.handleLogin.bind(this);
    }

    //event handler
    handleLogin(event) {
        // http://localhost:8080/EmployeeService/rest/EmployeeService/Login/{email}/{pw}
        var url = "http://localhost:8080/EmployeeService/rest/EmployeeService/Login/" +
            event.target.email.value + "/" +
            event.target.password.value;

        alert(url);
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleLogin}>
                    <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} /><br />
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} /><br />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }

}
export default Login;