import React from "react";
import Comments from "./Comments";
import "./App.css";
import data from "../data.json";

class App extends React.Component {
  componentDidMount() {
    console.log(data);
  }
  render() {
    return (
      <div>
        <Comments data={data} />
      </div>
    );
  }
}

export default App;
