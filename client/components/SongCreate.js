import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  onSubmit(e) {
    this.props
      .mutate({
        variables: {
          title: this.state.title
        }
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