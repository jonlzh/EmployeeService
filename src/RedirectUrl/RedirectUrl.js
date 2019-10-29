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
            <Link to="/index">Show All Employee</Link>
          </li>
          <li>
            <Link to="/add">Add Employee</Link>
          </li>
          <li>
            <Link to="/delete">Delete Employee</Link>
          </li>
          <li>
            <Link to="/own">own details</Link>
          </li>
        </ul>
      </div>
    );
  }

}

export default RedirectUrl;