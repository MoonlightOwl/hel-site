import './globals.js'
import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import './lib/semantic.min.js'
import Dash from './view/dash'
import Greeting from './view/greeting'
import List from './view/packages'
import './dom.js'

console.info('Welcome to Hel!');

class Hel extends React.Component {
  constructor() {
    super()
    this.style = {
      padding: 20
    }
  }
  componentDidMount() {
    var Router = Backbone.Router.extend({
      routes: {
        '': 'home',
        'about': 'about'
      },
      home: function() { console.debug('Home, sweet home!'); },
      about: function() { console.debug('We are champions!'); }
    });

    new Router();
    Backbone.history.start();
  }
  render() {
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
}

ReactDOM.render(
  <Hel />,
  document.getElementById('content')
);
