import React from 'react'
import RedirectUrl from '../RedirectUrl/RedirectUrl';
class ShowAllEmployee extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      EmployeesArray: [],
    }

    this.handleUpdateEmployee = this.handleUpdateEmployee.bind(this);
  }

  handleUpdateEmployee(event) {
    //event.target.employee_id.value can be used to get the value of the textbox
    var url = "http://localhost:8080/EmployeeService/rest/EmployeeService/Update/" +
      event.target.employee_id.value + "/" +
      event.target.fname.value + "/" +
      event.target.lname.value + "/" +
      event.target.email.value + "/" +
      event.target.contact.value + "/" +
      event.target.role.value + "/" +
      event.target.deleted.value;

    alert(url);
    //call the update service
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
    let url = "http://localhost:8080/EmployeeService/rest/EmployeeService/AllEmployee";
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
        <RedirectUrl/>
        {this.state.EmployeesArray.map((employee) => (
          <form onSubmit={this.handleUpdateEmployee}>
            <input type="text" name="employee_id" key={employee.employee_id.string} id={employee.employee_id.string} value={employee.employee_id.string} readOnly />&emsp;
                  <input type="text" name="fname" defaultValue={employee.fname.string} />&emsp;
                  <input type="text" name="lname" defaultValue={employee.lname.string} />&emsp;
                  <input type="text" name="email" defaultValue={employee.email.string} />&emsp;
                  <input type="text" name="contact" defaultValue={employee.contact.string} />&emsp;
                  <input type="text" name="role" defaultValue={employee.role.string} />&emsp;
                  <input type="text" name="department" defaultValue={employee.department.string} />&emsp;
                  <input type="text" name="deleted" defaultValue={employee.deleted.string} />&emsp;
                  <button type="submit">Update</button>
          </form>
        ))}
      </div>
    );
  }

}
export default ShowAllEmployee;