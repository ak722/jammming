import React from  'react';
import './Track.css';

class Track extends React.Component{

   constructor(props){
       super(props);
       this.addTrack = this.addTrack.bind(this);
       this.removeTrack = this.removeTrack.bind(this);
       this.renderAction = this.renderAction.bind(this);
    }
   
   
    renderAction(){
      
        if (this.props.isRemoval === true){
           return <h1 onClick={this.removeTrack}>-</h1>;
       }
       else{
           return <h1 onClick={this.addTrack}>+</h1>;
       }
   }
   
   addTrack(){
        this.props.track = this.props.onAdd ;
   }

   removeTrack(){
       this.props.track = this.props.onRemove;
   }

   
    render(){
        return <div className="Track">
        <div className="Track-information">
          <h3>{this.props.name}</h3>
          <p> {this.props.artist} | {this.props.album}</p>
        </div>
        <a className="Track-action">{this.renderAction}</a>
      </div>
    }

}

export default Track;