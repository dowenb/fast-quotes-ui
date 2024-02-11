import React from "react";
import styled, { css } from 'styled-components';

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

  Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

  // Create a Wrapper component that'll render a <section> tag with some styles
  Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
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
        <this.Wrapper>
          <this.Title>Random Quote</this.Title>
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
          }
          <button onClick={() => window.location.reload(false)}>Get a new quote</button>
        </this.Wrapper>
      </React.Fragment>);

  }
}
export default App;
