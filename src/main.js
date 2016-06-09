import React from 'react'
import ReactDOM from 'react-dom'

console.info('Welcome to Hel!');

var SearchForm = React.createClass({
  render: function() {
    return (
      <div className="searchForm">
        Hello, world! I am a SearchForm.
      </div>
    );
  }
});

var PackageList = React.createClass({
  render: function() {
    return (
      <div className="packageList">
        Hello, world! I am a PackageList.
      </div>
    );
  }
});

var Package = React.createClass({
  render: function() {
    return (
      <div className="package">
        <h2 className="packageName">
          {this.props.name}
        </h2>
        {this.props.decsription}
      </div>
    );
  }
});

var HelloBox = React.createClass({
  render: function() {
    return (
      <div className="helloBox">
      	<SearchForm />
      	<PackageList />
      	Hello from Hel!
      </div>
    );
  }
});
ReactDOM.render(
  <HelloBox />,
  document.getElementById('content')
);
