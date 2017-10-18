import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router";
import query from "../queries/fetchSongs";

class SongList extends Component {
  onSongDelete(id) {
    this.props
      .mutate({ variables: { id } })
      .then(() => this.props.data.refetch());
  }

  renderSongs() {
    // this.props.data = to access the returned value from the GraphQL Query
    return this.props.data.songs.map((value, index) => {
      return (
        <li className="collection-item" key={value.id}>
          {value.title}
          <i
            className="material-icons"
            onClick={() => {
              this.onSongDelete(value.id);
              console.log(value.id);
            }}
          >
            delete
          </i>
        </li>
      );
    });
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading ...</div>;
    }
    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/new" className="btn-floating btn-large blue right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

//connnect react with mutation + query
export default graphql(mutation)(graphql(query)(SongList));
