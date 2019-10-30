import React from 'react';
import { Link } from "react-router-dom";

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
            <Link to="/add">Add Employee</Link>
          </li>
          <li>
            <Link to="/update">Update Employee</Link>
          </li>
          <li>
            <Link to="/delete">Delete Employee</Link>
          </li>
          {/* <li>
            <Link to="/index">Own details</Link>
          </li> */}
        </ul>
      </div>
    );
  }

}

export default RedirectUrl;