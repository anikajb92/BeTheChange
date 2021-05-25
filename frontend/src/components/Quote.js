import React, { Component } from "react";

export default class Quote extends Component {

  render() {
    return (
      <div>
        <p>{this.props.returnQuote.inspiration}</p>
        <p>{this.props.returnQuote.author}</p>
      </div>
    );
  }
}
