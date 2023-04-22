import { Route, BrowserRouter, Switch, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Todos />;
          }}
        />
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

function Header() {
  return (
    <>
      <Link className="nav-link active" aria-current="page" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/about">
        About
      </Link>
    </>
  );
}

function Todos() {
  return <h1>Todos</h1>;
}

function About() {
  return <h1>About</h1>;
}
