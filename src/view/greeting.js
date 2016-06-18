import React from 'react'

class Greeting extends React.Component {
  render() {
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
}

export default Greeting;