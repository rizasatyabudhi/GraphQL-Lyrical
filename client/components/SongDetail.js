import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

import fetchSong from "../queries/songDetail";
class SongDetail extends Component {
  render() {
    const { song } = this.props.data;
    console.log(song, "INI NIHH");
    if (!song) {
      return <div>Loading....</div>;
    }
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.params.id} />
      </div>
    );
  }
}

// export default graphql(fetchSong)(SongDetail);
export default graphql(fetchSong, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
