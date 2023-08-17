import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./page/login";
import BooksManagement from "./page/booksManagement";
import HomePage from "./page/homepage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Switch>
        <Route path="/sign-in" component={Login} />
        <Route path="/books-management" component={BooksManagement} />
        <Route path="/" component={HomePage} exact />
      </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
