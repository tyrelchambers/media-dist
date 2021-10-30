import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { DASHBOARD, LOGIN, REGISTER } from "./routes/index.routes";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./pages/Login/Login";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path={DASHBOARD} component={Dashboard} />
          <Route path={LOGIN} component={Login} />
          <Route path={REGISTER} component={Signup} />
        </Switch>
      </Router>
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
