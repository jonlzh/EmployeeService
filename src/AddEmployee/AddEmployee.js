import React from 'react'
import RedirectUrl from '../RedirectUrl/RedirectUrl';

class AddEmployee extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fname: "",
            lname: "",
            email: "",
            contact: "",
            role: "",
            password: "",
        }

        //must bind the event handlers to use it
        this.handleAddEmployee = this.handleAddEmployee.bind(this);
        this.handleFname = this.handleFname.bind(this);
        this.handleLname = this.handleLname.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleContact = this.handleContact.bind(this);
        this.handleRole = this.handleRole.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    //event handler
    clearData(){
        this.setState({
            fname: "",
            lname: "",
            email: "",
            contact: "",
            role: "",
            password: "",
            msg: "",
        })
    }
    handleFname(event) {
        this.setState({ fname: event.target.value });
    }
    handleLname(event) {
        this.setState({ lname: event.target.value });
    }
    handleEmail(event) {
        this.setState({ email: event.target.value });
    }
    handleContact(event) {
        this.setState({ contact: event.target.value });
    }
    handleRole(event) {
        this.setState({ role: event.target.value });
    }
    handlePassword(event) {
        this.setState({ password: event.target.value });
    }
    handleAddEmployee(event) {
        var url = "http://localhost:8080/EmployeeService/rest/EmployeeService/Add/" +
            this.state.fname + "/" +
            this.state.lname + "/" +
            this.state.email + "/" +
            this.state.contact + "/" +
            this.state.role + "/" +
            this.state.password;

        let reqOptions = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Origin': '*'
            }
        };
        fetch(url, reqOptions)
            // .then(res => res.text())          // convert to plain text
            // .then(text => console.log("asd: " + text))  // then log it out
            .then(res => res.json())
            .then((data) => {
                try 
                {
                    if (data[0].msg.string.includes("Employee Added Successfully :")) 
                    {
                        this.clearData();
                        this.setState ({ msg: data[0].msg.string});
                    }
                } catch (error) 
                {
                    if(error.includes("Failed to fetch"))
                    {
                        
                    }
                    console.log(error);
                }
            })
            .catch(console.log);
        alert(url);
    }

    render() {
        return (
            <div>
                <RedirectUrl/>
                <form>
                    First Name: <input type='text' name='fname' value={this.state.fname} onChange={this.handleFname}/><br />
                    Last Name: <input type='text' name='lname' value={this.state.lname} onChange={this.handleLname}/><br />
                    Email: <input type='text' name='email' value={this.state.email} onChange={this.handleEmail}/><br />
                    Contact No: <input type='text' name='contact' value={this.state.contact} onChange={this.handleContact}/><br />
                    Role: <input type='text' name='role' value={this.state.role} onChange={this.handleRole}/><br/>
                    Password: <input type='password' name='password' value={this.state.password} onChange={this.handlePassword}/><br />
                    <button type="button" onClick={this.handleAddEmployee}>Add</button><input type="reset" />
                    <p>{this.state.msg}</p>
                </form>
            </div>
        );
    }

}
export default AddEmployee;