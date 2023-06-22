import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
export default function App() {
  return (
    <div className="App">
      <h1>
        <Router>
          <Switch>
            <Route path="/">
              <Header />
            </Route>
          </Switch>
        </Router>
      </h1>
    </div>
  );
}
