import React from 'react'

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

export default Dash;