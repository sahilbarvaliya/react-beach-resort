import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/Next";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/rooms/" component={Rooms}></Route>
        <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
        <Route exact component={Error}></Route>
      </Switch>
    </>
  );
}

export default App;
