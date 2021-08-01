import "./App.css";
// import FormContact from "./component/FormContact";
// import ContactsFilter from "./component/ContactsFilter";
// import ContactList from "./component/ContactList";
// import UserLogged from "./component/header/header";

import { connect } from "react-redux";
import { logger } from "./redux/contacts/contact-selectors";
import { currentUser } from "./redux/authorization/autorization-operations";

import { Switch, Route, Redirect } from "react-router-dom";
import { Component, lazy } from "react";

// import PhoneBook from "./Route/PhoneBook";
// import Register from "./Route/Register/Register";
// import Login from "./Route/SingIn/SingIn";

import PrivateRoute from "./Route/privateRoute/privateRoute";
import PublicRoute from "./Route/publicRoute/publicRoute";

import UserLogged from "./component/header/header";

const PhoneBook = lazy(() =>
  import("./Route/PhoneBook" /* webpackChunkName: "PhoneBook" */)
);

const Register = lazy(() =>
  import("./Route/Register/Register" /* webpackChunkName: "Register" */)
);

const Login = lazy(() =>
  import("./Route/SingIn/SingIn" /* webpackChunkName: "Login" */)
);

// import { render } from "@testing-library/react";

// import styles from "./App.module.scss";

// const App = ({ logger }) => {
//   return (
//     <div>
//       <UserLogged />
//       <Switch>
//         <Route path="/register" component={Register} />
//         <Route path="/Login" component={Login} />
//         <Route path="/" component={PhoneBook} />
//       </Switch>

//       {logger && <h1>Загрузк...</h1>}
//     </div>
//   );
// };

class App extends Component {
  componentDidMount = () => {
    this.props.currentUser();
  };

  render() {
    return (
      <div>
        <UserLogged />
        <Switch>
          <PublicRoute
            path="/register"
            restricted
            redirect="/"
            component={Register}
          />
          <PublicRoute
            path="/Login"
            restricted
            redirect="/"
            component={Login}
          />
          <PrivateRoute path="/" redirect="/Login" component={PhoneBook} />
          <Redirect to="/login" />
        </Switch>

        {this.props.logger && <h1>Загрузк...</h1>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  logger: logger(state),
});

const mapDispatchToProps = {
  currentUser: currentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
