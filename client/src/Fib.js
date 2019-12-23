import React, { Component } from "react";
import axios from "axios";
import { ValueList } from "./components/values-list/values-list.component";
import { Indexes } from "./components/indexes/indexes.component";

class Fib extends Component {
  constructor() {
    super();
    this.state = {
      seenIndexes: [],
      values: {},
      index: ""
    };
  }

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
    console.log("Hello");
  }

  async fetchValues() {
    const values = await axios.get("/api/values/current");
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get("/api/values/all");
    this.setState({ seenIndexes: seenIndexes.data });
  }

  handleSubmit = async event => {
    event.preventDefault();

    await axios.post("/api/values", {
      index: this.state.index
    });

    this.setState({ index: "" });
    this.fetchValues();
    this.fetchIndexes();
  };

  handleIndexChange = e => {
    this.setState({ index: e.target.value });
  };

  render() {
    const { seenIndexes, values } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your index:</label>
          <input value={this.state.index} onChange={this.handleIndexChange} />
          <button>Submit</button>
        </form>
        <h3>Indexes I have seen:</h3>
        <Indexes seenIndexes={seenIndexes} />
        <h3>Calculated Values:</h3>
        <ValueList values={values} />
      </div>
    );
  }
}

export default Fib;
