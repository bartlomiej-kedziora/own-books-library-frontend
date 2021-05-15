import React, {Component} from "react";
import Layout from "./hoc/Layout/Layout"
import Library from "./containers/Library/Library"
import {Route, Switch} from "react-router-dom";
import Authors from "./containers/Authors/Authors";
import Books from "./containers/Books/Books";
import Forms from "./containers/Forms/Forms";
import Languages from "./containers/Languages/Languages";
import Collection from "./containers/Collection/Collection";
import Api from "./containers/Api/Api";

class App extends Component {
  render() {
    return (
        <div>
          <Layout>
            <Switch>
              <Route path="/authors" component={Authors} />
              <Route path="/books" component={Books} />
              <Route path="/forms" component={Forms} />
              <Route path="/languages" component={Languages} />
              <Route path="/collection" component={Collection} />
              <Route path="/api" component={Api} />
              <Route path="/" exact component={Library} />
            </Switch>
          </Layout>
        </div>
    );
  }
}

export default App;