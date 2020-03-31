import React, { Component } from 'React';


class Gif extends Component {
  constructor(props) { // be promoted into a class
    super(props);
    this.state = { clicked: false }; // defines initial state
  }

  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render () {
    const src=`https://media1.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
        <img src={src} alt="" className={`gif ${this.state.clicked ? "clicked" : ""}`}
         onClick={this.handleClick}/>
      );
  }
}

export default Gif;
