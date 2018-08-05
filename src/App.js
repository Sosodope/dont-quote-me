import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    quote: "",
    author: "",
    image: ""
  };
  componentDidMount() {
    fetch("https://talaikis.com/api/quotes/random/")
      .then(res => res.json())
      .then(data => {
        this.setState({
          quote: data.quote,
          author: data.author
        });
      });
  }
  updateQuote = () => {
    fetch("https://talaikis.com/api/quotes/random/")
      .then(res => res.json())
      .then(data => {
        this.setState({
          quote: data.quote,
          author: data.author
        });
      });
  };
  updateImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => {
        this.setState({ image: data.message });
      });
  };
  handleTweet = () => {
    window.open(`https://twitter.com/intent/tweet?text="${this.state.quote}"
    - ${this.state.author}`);
  };
  render() {
    return (
      <div className="columns is-mobile">
        <div className="column">
          <div className="tile is-parent">
            <article className="tile is-child notification is-info">
              <p className="title">Here's a cute dog to cheer you up</p>
              <button
                id="button--warning"
                className="button is-link subtitle is-warning"
                onClick={this.updateImage}
              >
                Get new dog
              </button>
              <figure className="image is-4by3">
                {this.state.image ? <img src={this.state.image} /> : ""}
              </figure>
            </article>
          </div>
        </div>
        <div className="column">
          <div className="tile is-parent quote">
            <div className="actions">
              <button className="button is-link" onClick={this.updateQuote}>
                Get new quote
              </button>
              <button onClick={this.handleTweet} className="is-info button">
                Tweet this quote
              </button>
            </div>
            <article className="tile is-child notification is-danger">
              <p className="title">Check this out</p>
              <blockquote className="subtitle">
                {this.state.quote && this.state.author ? (
                  <React.Fragment>
                    <q>{this.state.quote}</q>
                    <p>- {this.state.author}</p>
                  </React.Fragment>
                ) : (
                  <p>Loading...</p>
                )}
              </blockquote>
              <div className="content" />
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
