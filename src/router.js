import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import DetailedCharacter from "./pages/DetailedCharacter";
import DetailedEpisode from "./pages/DetailedEpisode";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/character/:id">
          <Header />
          <DetailedCharacter />
        </Route>
        <Route exact path="/episode/:id">
          <Header />
          <DetailedEpisode />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
