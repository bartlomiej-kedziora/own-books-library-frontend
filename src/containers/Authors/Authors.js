import React, {Component} from "react";
import axios from "../../axious-backend";
import Author from "../../components/Author/Author"
import styles from "./Authors.module.css"

class Authors extends Component {
  state = {
    authors: [],
    loading: true
  };

  componentDidMount() {
    axios.get('/authors')
    .then(res => {
      const fetchedAuthors = [];
      for (let key in res.data) {
        fetchedAuthors.push({
          ...res.data[key], key
        });
      }
      this.setState({loading: false, authors: fetchedAuthors});
      console.log(res.data);
    })
    .catch(err => {
      this.setState({loading: false});
    });
  }

  renderTableHeader() {
    return <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Surname</th>
      <th>City</th>
      <th>Country</th>
      <th>Birth</th>
    </tr>;
  }

  renderAuthors() {
    return this.state.authors.map(author => (
        <Author key={author.id}
                details={author}
        />
    ));
  }

  render() {
    return (
        <div>
          <h1 className={styles.Title}>Authors</h1>
          <table className={styles.Authors}>
            <tbody>
            {this.renderTableHeader()}
            {this.renderAuthors()}
            </tbody>
          </table>
        </div>
    );
  };
}

export default Authors;