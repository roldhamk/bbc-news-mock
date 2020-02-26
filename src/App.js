import React from "react";
import "./App.css";
import logo from "../src/CN.png";
import tower from "../src/towerblock.jpg";
import ninswitch from "../src/switch.jpg";
import airport from "../src/airports.jpg";
import podcast from "../src/podcast.jpg";
import snow from "../src/snow.jpg";

const Newsbar = props => {
  return (
    <div className="wrapper">
      <img src={props.img} alt="" />
      <div className="headline">
        <h4>{props.headline}</h4>
      </div>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="logo">
          <img src={logo} alt="Code Nation Logo" width="200px" />
        </div>
        <div className="header">
          <h2>Long Reads</h2>
          <h3>See All</h3>
        </div>
        <div className="main">
          <Newsbar
            img={tower}
            headline="What's it really like living up high?"
          />
          <Newsbar img={ninswitch} headline="Nintendo Switch Lite - Review" />
          <Newsbar
            img={airport}
            headline="The sound disappearing from airports"
          />
          <Newsbar
            img={podcast}
            headline="Podcast: Rocket - Accelerated Geek Conversation"
          />
          <Newsbar
            img={snow}
            headline="Snow & ice forecast for most of the UK"
          />
        </div>
        <div className="header">
          <h2>Newsbeat</h2>
          <h3>See All</h3>
        </div>
        <div className="main">
          <Newsbar
            img={tower}
            headline="What's it really like living up high?"
          />
          <Newsbar img={ninswitch} headline="Nintendo Switch Lite - Review" />
          <Newsbar
            img={airport}
            headline="The sound disappearing from airports"
          />
          <Newsbar
            img={podcast}
            headline="Podcast: Rocket - Accelerated Geek Conversation"
          />
          <Newsbar
            img={snow}
            headline="Snow & ice forecast for most of the UK"
          />
        </div>
      </div>
    );
  }
}

export default App;
