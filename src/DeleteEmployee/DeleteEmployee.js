import React from 'react'
import RedirectUrl from '../RedirectUrl/RedirectUrl';
class DeleteEmployee extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            EmployeesArray: [],
            employee_id: "",
            msg: "",
        }

        this.handleDeleteEmployee = this.handleDeleteEmployee.bind(this);
    }

    handleDeleteEmployee(event) {
        //event.target.value can be used to get the value={employee.employee_id.string} from button
        //to know which employee to delete
        var url = "http://localhost:8080/EmployeeService/rest/EmployeeService/Delete/" +
            event.target.value;
   
        //call the delete service
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
            // .then(text => console.log(text))  // then log it out
            .then(res => res.json())
            .then((data) => {
                try 
                {
                    if (data[0].msg.string.includes("Delete")) 
                    {
                        this.setState ({ msg: data[0].msg.string});
                        this.componentDidMount();
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
    }

    componentDidMount() {
        let reqOptions = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Origin': '*'
            }
        };
        let url = "http://localhost:8080/EmployeeService/rest/EmployeeService/CurrentEmployee";
        fetch(url, reqOptions)
            // .then(res => res.text())          // convert to plain text
            // .then(text => console.log(text))  // then log it out
            .then(res => res.json())
            .then((data) => {
                this.setState({ EmployeesArray: data });
            })
            .catch(console.log);
    }
    render() {
        return (

            <div>
                <RedirectUrl />
                {this.state.EmployeesArray.map((employee) => (
                    <form>
                        <input type="text" name="employee_id" key={employee.employee_id.string} id={employee.employee_id.string} value={employee.employee_id.string} readOnly />&emsp;
                        <input type="text" name="fname" value={employee.fname.string} />&emsp;
                        <input type="text" name="lname" value={employee.lname.string} />&emsp;
                        <input type="text" name="email" value={employee.email.string} />&emsp;
                        <input type="text" name="contact" value={employee.contact.string} />&emsp;
                        <input type="text" name="role" value={employee.role.string} />&emsp;
                        <input type="text" name="department" value={employee.department.string} />&emsp;
                        <button type="button" value={employee.employee_id.string} onClick={e => this.handleDeleteEmployee(e, "value")} >Delete</button>
                    </form>
                ))}
                <p>{this.state.msg}</p>
            </div>
        );
    }

}
export default DeleteEmployee;