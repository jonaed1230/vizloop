import React from "react";
import "./App.css";
import background from "./components/img/background.jpg";
import Dot from "./components/dot";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dot: []
    };
  }
  componentDidMount() {
    const image = document.querySelector(".space");
    image.addEventListener("click", e => {
      console.log(e.clientX, e.clientY);
      this.setState(state => {
        let dot = [
          ...state.dot,
          <Dot left={e.clientX} top={e.clientY} key={e.clientX+e.clientY} />
        ];
        return {
          dot
        };
      });
    });
    image.addEventListener("dblclick", e => {
      e.preventDefault();
      e.stopPropagation();
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.dot.map(child => child)}
        <img src={background} alt="space" className="space" />
      </div>
    );
  }
}

export default App;
