import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./Layout";
import Leads from "./pages/Leads";
import Analytics from "./pages/Analytics";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {

  const userdata = JSON.parse(localStorage.getItem("userdata"));

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/a" element={<Layout />}>
            <Route path="leads" element={<Leads />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
