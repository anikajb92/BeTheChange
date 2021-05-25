import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Quote from "./components/Quote";

class App extends Component {
  state = {
    userQuote: "",
    returnQuote: "",
    displayQuote: false
  };

  handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    this.setState({ userQuote: formData.get("changeInput") });
    this.setState({ displayQuote: true });
  };

  displayComponent = () => {
    return this.state.displayQuote ? (
      <Quote userQuote={this.state.userQuote} />
    ) : (
      <Form
        handleSubmit={this.handleSubmit}
        userQuote={this.state.userQuote}
        handleChange={this.handleChange}
      />
    );
  };

  handleChange = event => {
    this.setState({ userQuote: event.target.value });
  };

  render() {
    return <div className="App">{this.displayComponent()}</div>;
  }
}
export default App;
