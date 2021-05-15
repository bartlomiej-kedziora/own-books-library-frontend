import React, {Component} from "react";
import Layout from "./hoc/Layout/Layout"

class App extends Component {
  render() {
    return (
        <div>
          <Layout>
            {/*<BookBuilder />*/}
            <p>hello</p>
          </Layout>
        </div>
    );
  }
}

export default App;