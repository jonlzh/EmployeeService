import React from 'react'
import RedirectUrl from '../RedirectUrl/RedirectUrl';

class ShowOwnDetails extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      EmployeesArray: [],
    }
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
    let url = "http://localhost:8080/EmployeeService/rest/EmployeeService/OwnDetails/ali@gmail.com/";
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
          <p key={employee.email.string}>
            First Name: {employee.fname.string}<br/>
            Last name: {employee.lname.string}<br/>
            Email: {employee.email.string}<br/>
            Contact: {employee.contact.string}<br/>
            Role: {employee.role.string}<br/>
            Department: {employee.department.string}<br/>
          </p>
        ))}
      </div>
    );
  }

}
export default ShowOwnDetails;