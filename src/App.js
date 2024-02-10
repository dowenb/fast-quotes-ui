import { render } from "@testing-library/react";
import React, { Component } from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    who: String,
    what: String,
    when: String,
    where: String,
    error: null
  };
  getFetchQuotes() {
    this.setState({
      loading: true
    }, () => {
      fetch('http://localhost:8000/quote').then(res => res.json()).then(result => this.setState({
        loading: false,
        who: result.who,
        what: result.what,
        when: result.when,
        where: result.where
      })).catch(console.log);
    });
  }

  componentDidMount() {
    this.getFetchQuotes();
  }

  render() {
    const {
      who,
      what,
      when,
      where,
      error
    } = this.state;

    return (
      <React.Fragment>
        <h1>Your Random Quote</h1>
        {
          error ? <p>
            {
              error.message
            } </p> : null
        } {
          <div key={what}>
            <p>Who: {who}</p>
            <p>What: {what}</p>
            <p>When: {when}</p>
            <p>Where: {where}</p>
          </div>
        } </React.Fragment>);

  }
}
export default App;
