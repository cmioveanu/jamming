import logo from './logo.svg';
import './App.css';


import {SearchBar} from './../SearchBar/SearchBar'
import {SearchResults} from './../SearchResults/SearchResults'
import {Playlist} from '../PlayList/PlayList'

function App() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults />
            <PlayList />
          </div>
        </div>
      </div>
    );
}

export default App;