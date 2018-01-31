import React, { Component } from 'react';

import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

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
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
