import React, { Component } from "react";

class LyricList extends Component {
  onLike(id) {
    console.log(id);
  }

  render() {
    return (
      <div>
        <ul className="collection">
          {this.props.lyrics.map(({ id, content }) => {
            return (
              <li className="collection-item" key={id}>
                {content}
                <i onClick={() => this.onLike(id)} className="material-icons">
                  thumb_up
                </i>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default LyricList;
