import React from 'react';
import Track from '../Track/Track';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';
class App extends React.Component {
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.state = {
        searchResults: [],
        name: 'New Playlist',
        artist: [],
        album: [],
        id: []
    };

    this.state = {
      playlistName: '',
      playlistTracks: [
        { name: "", artist: "", album: "", id: "" },
        { name: "", artist: "", album: "", id: "" },
        { name: "", artist: "", album: "", id: "" },
        { name: "", artist: "", album: "", id: "" },
        { name: "", artist: "", album: "", id: "" },
        { name: "", artist: "", album: "", id: "" },
        
      ]
        
      
    };

  }
  
  addTrack(track){
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      return ;
    }
  }


  removeTrack(track){
    this.state.playlistTracks.filter(savedTrack => savedTrack.id === track.id);
  }

  updatePlaylistName(name){
       this.setState({playlistName: name}); 
  }

  savePlaylist(){
      const trackURIs = [
      this.state.playlistTracks
    ];
  }

  search(term){
    Spotify.search(term).then(tracks=>{
      this.setState({searchResults: tracks});
    });  
    console.log({term});
  }
  
  
  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch = {this.search}/>
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}  onAdd={this.addTrack}/>
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
