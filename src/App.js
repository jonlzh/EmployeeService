import React from 'react';
import './App.css';
import ShowAllEmployee from './ShowAllEmployee/ShowAllEmployee';
import Login from './Login/Login';
import AddEmployee from './AddEmployee/AddEmployee';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      EmployeesArray: [],
    }
  }


  render() {
    return (
      <div>
        {/* <Login /> */}
        {/* <AddEmployee /> */}
        <ShowAllEmployee/>
      </div>
    );
  }

}

export default App;