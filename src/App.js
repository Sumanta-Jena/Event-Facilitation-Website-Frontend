import { BrowserRouter, Route, Link, HashRouter } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Bookingscreen from "./screens/Bookingscreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AdminScreen from "./screens/AdminScreen";
import LandingScreen from "./screens/LandingScreen";

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
