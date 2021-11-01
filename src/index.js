import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {
  CALLBACK_YOUTUBE,
  DASHBOARD,
  INTEGRATIONS,
  LOGIN,
  REGISTER,
} from "./routes/index.routes";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./pages/Login/Login";
import Integrations from "./pages/Integrations/Integrations";
import CallbackYoutube from "./pages/Callbacks/CallbackYoutube";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path={DASHBOARD} component={Dashboard} />
          <Route exact path={LOGIN} component={Login} />
          <Route exact path={REGISTER} component={Signup} />
          <Route exact path={INTEGRATIONS} component={Integrations} />
          <Route exact path={CALLBACK_YOUTUBE} component={CallbackYoutube} />
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
