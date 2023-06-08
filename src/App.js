import Home from "./Home";
import Nav from "./Navbar";
import Create from "./Createblog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blogdetails from "./Blogdetails";
import NotFound from "./404";
const App = ()=> {
  return (
    <Router>
      <div className="app">
        <Nav />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create/>
            </Route>
            <Route exact path="/blog-details/:id">
              <Blogdetails/>
            </Route>
            <Route exact path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
