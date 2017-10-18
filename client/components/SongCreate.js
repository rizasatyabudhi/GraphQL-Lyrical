import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";
import query from "../queries/fetchSongs";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  onSubmit(e) {
    // this.props.mutate = to use function of the mutation
    this.props
      .mutate({
        variables: { title: this.state.title },
        // After the mutation runs, we immediately re-run the fetchSong query
        refetchQueries: [{ query: query }]
      })
      .then(() => hashHistory.push("/"));
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Craete a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label htmlFor="">Song Title:</label>
          <input
            type="text"
            onChange={e => this.setState({ title: e.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
