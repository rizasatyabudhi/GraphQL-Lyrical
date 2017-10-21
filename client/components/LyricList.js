import React, { Component } from "react";

class LyricList extends Component {
  render() {
    return (
      <div>
        <ul className="collection">
          {this.props.lyrics.map(({ id, content }) => {
            return (
              <li className="collection-item" key={id}>
                {content}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default LyricList;
