import React from 'react'
import ReactDOM from 'react-dom'
import jQuery from 'jquery'
import './semantic.min.js'

console.info('Welcome to Hel!');

var Dash = React.createClass({
  render: function() {
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
          <div className="ui simple dropdown item">
            Profile
            <i className="dropdown icon"></i>
            <div className="menu">
              <a className="item"><i className="edit icon"></i> Edit Profile</a>
              <a className="item"><i className="globe icon"></i> Choose Language</a>
              <a className="item"><i className="sign out icon"></i> Logout</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var List = React.createClass({
  render: function() {
    return (
      <div className="ui segment">
        <p>Welcome to Hel Repository!</p>
      </div>
    );
  }
});

var Hel = React.createClass({
  render: function() {
    return (
      <div className="app">
        <Dash />
        <List />
      </div>
    );
  }
});

ReactDOM.render(
  <Hel />,
  document.getElementById('content')
);
