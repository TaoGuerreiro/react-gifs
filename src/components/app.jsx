import React, { Component } from 'React';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';
// const giphy = require('giphy-api')("lZFEbHMqu2s9MCMUeVNYYMCOBV091b4e");

class App extends Component {
  constructor(props) {
    super(props);

      this.state = {
        gifs: [],
        selectedGifId: "xT9IgDEI1iZyb2wqo8"
      }
      this.search("homer");
    }

  search = (query) => {
    giphy('lZFEbHMqu2s9MCMUeVNYYMCOBV091b4e').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      console.log(result);
      this.setState({
        gifs: result.data
      });
    });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
      );
  }
}

export default App;
