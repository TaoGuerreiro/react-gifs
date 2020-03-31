import React, { Component } from 'React';


class Gif extends Component {
  render () {
    const src=`https://media1.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
        <img src={src} alt="" className="gif"/>
      );
  }
}

export default Gif;
