import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import NotFound from "./components/common/notFound";

function App() {
  return (
    <main className="container-fluid">
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={NotFound} />
          <Route path="/rentals" component={NotFound} />
          <Route path="/notfound" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/notfound" />
        </Switch>
      </div>
    </main>
  );
}

export default App;
