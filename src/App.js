import React from 'react';
import './App.css';
import ShowAllEmployee from './ShowAllEmployee/ShowAllEmployee';
import ShowOwnDetails from './ShowOwnDetails/ShowOwnDetails';
import Login from './Login/Login';
import AddEmployee from './AddEmployee/AddEmployee';
import DeleteEmployee from './DeleteEmployee/DeleteEmployee';
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
    }
  }


  render() {
    return (
      <div>
          <Switch>
            <Route exact strict path="/update" component={ShowAllEmployee} />
            <Route exact strict path="/" render={() => <Login />} />
            <Route exact strict path="/add" component={AddEmployee} />
            <Route exact strict path="/delete" component={DeleteEmployee} />
            <Route exact strict path="/index" component={ShowOwnDetails} />
          </Switch>
      </div>
    );
  }

}

export default withRouter(App);