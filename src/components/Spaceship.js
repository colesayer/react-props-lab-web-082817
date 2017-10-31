import React from 'react';
// Code The Spaceship Component Here

export default class Spaceship extends React.Component{
  render() {
    return(
      <div className= "space-ship">
        <h1>{this.props.name}</h1>
        <h2>{this.props.speed}</h2>
        <h3>{this.props.hasRockets}</h3>
        <h4>{this.props.colors.join(', ')}</h4>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
