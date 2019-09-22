import React, { Component } from 'react';
import me from "./img/Photo.jpg"
class Dot extends Component {
  render() {
    return (
      <div>
        <img src={me} alt="me" style={{position: "absolute", left: this.props.left, top: this.props.top, height: "20px", width: "20px"}} />
      </div>
    );
  }
}

export default Dot;