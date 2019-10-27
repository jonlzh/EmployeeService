import React from 'react';
import './App.css';
import ShowAllEmployee from './ShowAllEmployee/ShowAllEmployee';
import Login from './Login/Login';
import AddEmployee from './AddEmployee/AddEmployee';
import DeleteEmployee from './DeleteEmployee/DeleteEmployee';
// import RedirectUrl from './RedirectUrl/RedirectUrl';
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
        {/* <ShowAllEmployee/> */}
          <Switch>
            <Route exact strict path="/index" component={ShowAllEmployee} />
            <Route exact strict path="/" render={() => <Login />} />
            <Route exact strict path="/add" component={AddEmployee} />
            <Route exact strict path="/delete" component={DeleteEmployee} />
          </Switch>
      </div>
    );
  }

}

export default withRouter(App);