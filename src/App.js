import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Statistics from "./components/Statistics";

import { GlobalStyle, Wrapper } from "./styles";

const App = () => {
  return (
    <Router>
      <Wrapper>
        <GlobalStyle />
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        </nav>
        <Switch>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/statistics'>
            <Statistics/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
};

export default App;
