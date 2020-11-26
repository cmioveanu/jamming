/*import logo from './logo.svg'; */
import './App.css';

import React from 'react';


import { SearchBar } from './../SearchBar/SearchBar';
import { SearchResults } from './../SearchResults/SearchResults';
import { PlayList } from '../PlayList/PlayList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Fishing adventures",
          artist: "John",
          album: "What is love",
          id: 1
        }, {
          name: "Hunting adventures",
          artist: "Jack",
          album: "What is sorrow",
          id: 2
        }, {
          name: "Exploring adventures",
          artist: "James",
          album: "What is hope",
          id: 3
        }
      ],

      playlistName: "Awesome Playlist",

      playlistTracks: [{
        name: "Incredible adventures",
        artist: "Andy",
        album: "What is joy",
        id: 4
      }, {
        name: "Fantastiv adventures",
        artist: "Aaron",
        album: "What is the universe",
        id: 5
      }]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);

  }


  addTrack(track) {
    const tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    const tracks = this.state.playlistTracks.filter(eachTrack => eachTrack.id !== track.id);
    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const trackURIs = [];
    for(track in this.state.playlistTracks) {
      trackURIs.push(track.uri);
    }
  
  }



  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <PlayList name={this.state.name}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
