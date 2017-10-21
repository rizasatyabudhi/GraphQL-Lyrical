import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class LyricList extends Component {
  onLike(id, likes) {
    this.props.mutate({
      variables: { id: id },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id: id,
          likes: likes + 1
        }
      }
    });
  }

  render() {
    return (
      <div>
        <ul className="collection">
          {this.props.lyrics.map(({ id, content, likes }) => {
            return (
              <li className="collection-item" key={id}>
                {content}
                <div className="vote-box">
                  <i
                    onClick={() => {
                      this.onLike(id, likes);
                    }}
                    className="material-icons"
                  >
                    thumb_up
                  </i>
                  {likes}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);
