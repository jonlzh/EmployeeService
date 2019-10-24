import React from 'react'

class AddEmployee extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }

        //must bind the event handlers to use it
        this.handleAddEmployee = this.handleAddEmployee.bind(this);
    }

    //event handler
    handleAddEmployee(event) {
        // http://localhost:8080/EmployeeService/rest/EmployeeService/Add/{fname}/{lname}/{email}/{contact}/{role}/{password}
        var url = "http://localhost:8080/EmployeeService/rest/EmployeeService/Add/" +
            event.target.fname.value + "/" +
            event.target.lname.value + "/" +
            event.target.email.value + "/" +
            event.target.contact.value + "/" +
            event.target.role.value + "/" +
            event.target.password.value;
        alert(url);
    }

    render() {
        return (

            <div>
                <form onSubmit={this.handleAddEmployee}>
                    First Name: <input type='text' name='fname' /><br />
                    Last Name: <input type='text' name='lname' /><br />
                    Email: <input type='text' name='email' /><br />
                    Contact No: <input type='text' name='contact' /><br />
                    Role: <input type='text' name='role' /><br />
                    Password: <input type='password' name='password' /><br />
                    <button type="submit">Add</button><input type="reset" />
                </form>
            </div>
        );
    }

}
export default AddEmployee;