import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./page/login";
import BooksManagement from "./page/booksManagement";
import HomePage from "./page/homepage";
import { useEffect, useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
    }
  }, []);
  return (
    <BrowserRouter>
      <Layout isAuth={isAuth}>
        <Switch>
          <Route path="/sign-in" component={Login} />
          <PrivateRoute
            path="/books-management"
            component={BooksManagement}
            isAuthenticated={isAuth}
          />
          <Route path="/" component={HomePage} exact />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/sign-in", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default App;
