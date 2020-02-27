import React from "react";
import "./App.css";
import logo from "../src/CN.png";
import tower from "../src/towerblock.jpg";
import ninswitch from "../src/switch.jpg";
import airport from "../src/airports.jpg";
import podcast from "../src/podcast.jpg";
import snow from "../src/snow.jpg";
import Newsbar from "./components/Newsbar";

class App extends React.Component {
  state = {
    news: [
      { img: tower, headline: "What's it really like living up high?" },
      { img: ninswitch, headline: "Nintendo Switch Lite - Review" },
      { img: airport, headline: "The sound disappearing from airports" },
      {
        img: podcast,
        headline: "Podcast: Rocket - Accelerated Geek Conversation"
      },
      { img: snow, headline: "Snow & ice forecast for most of the UK" }
    ]
  };
  render() {
    const newsItem = this.state.news.map((news, index) => {
      return <Newsbar img={news.img} headline={news.headline} key={index} />;
    });
    return (
      <div className="App">
        <div className="logo">
          <img src={logo} alt="Code Nation Logo" width="200px" />
        </div>
        <div className="header">
          <h2>Long Reads</h2>
          <h3>See All</h3>
        </div>
        <div className="main">{newsItem}</div>
        <div className="header">
          <h2>Newsbeat</h2>
          <h3>See All</h3>
        </div>
        <div className="main">{newsItem}</div>
      </div>
    );
  }
}

export default App;
