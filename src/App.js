import React, { Component } from 'react';

import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyCgL2IudtlwXRcWTb_Ov2-lVYPSp3wjdf8'



class App extends Component {
  constructor(props){
    super(props)

    this.state = { videos: [] }

    YTSearch({ key: API_KEY, term: 'joeman' }, (videos) => {
      this.setState({ videos: videos })
    })
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
