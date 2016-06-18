import './jquery-global.js'
import List from './packages'
import React from 'react'
import ReactDOM from 'react-dom'
import './semantic.min.js'
import './dom.js'

console.info('Welcome to Hel!');

class Dash extends React.Component {
  render() {
    return (
      <div className="ui attached stackable inverted menu">
        <div className="ui container">
          <a className="red item active">
            <i className="home icon"></i> Home
          </a>
          <a className="red item">
            <i className="grid layout icon"></i> Browse
          </a>
          <div className="red ui category search item">
            <div className="ui icon input">
              <input className="prompt" type="text" placeholder="Search packages..."></input>
              <i className="search link icon"></i>
            </div>
            <div className="results"></div>
          </div>
          <div className="right item">
            <div className="ui red button">Log-in</div>
          </div>
        </div>
      </div>
    );
  }
}

var Greeting = React.createClass({
  render: function() {
    return (
      <div className="ui negative message">
        <i className="close icon"></i>
        <div className="header">
          Welcome to Hel Package Repository!
        </div>
        <p></p>
      </div>
    );
  }
});

var Hel = React.createClass({
  style: {
    padding: 20
  },
  render: function() {
    return (
      <div className="app">
        <Dash />
        <div style={this.style} className="space">
          <Greeting />
          <List />
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Hel />,
  document.getElementById('content')
);
