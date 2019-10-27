import React from 'react';
import ShowAllEmployee from '../ShowAllEmployee/ShowAllEmployee';
import Login from '../Login/Login';
import AddEmployee from '../AddEmployee/AddEmployee';
import DeleteEmployee from '../DeleteEmployee/DeleteEmployee';
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

class RedirectUrl extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }


  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/index">Show All Employee</Link>
          </li>
          <li>
            <Link to="/add">Add Employee</Link>
          </li>
          <li>
            <Link to="/delete">Delete Employee</Link>
          </li>
        </ul>
      </div>
    );
  }

}

export default RedirectUrl;