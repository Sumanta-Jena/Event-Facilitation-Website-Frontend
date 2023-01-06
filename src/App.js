import { BrowserRouter, Route, Link, HashRouter } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Homescreen from "./screens/Homescreen.js";
import Bookingscreen from "./screens/Bookingscreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import AdminScreen from "./screens/AdminScreen.js";
import LandingScreen from "./screens/LandingScreen.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HashRouter>
        <Route path="/" exact component={LandingScreen} />
        <Route path="/home" exact component={Homescreen} />
        <Route
          path="/book/:roomid/:fromdate/:todate"
          exact
          component={Bookingscreen}
        />
        <Route path="/register" exact component={RegisterScreen} />
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/profile" exact component={ProfileScreen} />
        <Route path="/bookings" exact component={ProfileScreen} />
        <Route path="/admin" exact component={AdminScreen} />
      </HashRouter>
    </div>
  );
}

export default App;
