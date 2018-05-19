import React from 'react';
import './TrackList.css';
import ReactDOM from 'react-dom'
import Track from '../Track/Track';
class TrackList extends React.Component{
    render(){
        return (<div className="TrackList">{
        this.props.tracks.map(track =>{
         return <Track key={track.id} isRemoval = {this.props.isRemoval} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.TrackList.isRemoval}/>
       
    })}
     </div>
        );

    }
}

export default TrackList;