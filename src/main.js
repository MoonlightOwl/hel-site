import React from 'react'
import ReactDOM from 'react-dom'

console.info('Welcome to Hel!');

var HelloBox = React.createClass({
  render: function() {
    return (
      <div>
        Hello from Hel!
      </div>
    );
  }
});
ReactDOM.render(
  <HelloBox />,
  document.getElementById('content')
);
