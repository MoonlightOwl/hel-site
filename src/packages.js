import React from 'react'
import './semantic.min.js'

class Card extends React.Component {
  render() {
    var style = this.props.photo ? {
      height: 200,
      objectFit: 'cover'
    } : {};
    console.debug(style);
    return (
      <div className="ui card">
        <div className="image">
          <img style={ style } src={ this.props.photo }></img>
        </div>
        <div className="content">
          <a className="header">holo</a>
          <div className="meta">
            <a className="ui horizontal label">hologram</a>
            <a className="ui horizontal label">editor</a>
          </div>
          <div className="description">
            Hologram editor for OpenComputers
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="heart icon"></i>
            22 Likes
          </a>
        </div>
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    return (
      <div className="ui two stackable cards">
        <Card />
        <Card />
        <Card />
        <Card photo = "http://semantic-ui.com/images/avatar2/large/kristy.png" />
        <Card />
        <Card />
      </div>  
    );
  }
}

export default List;