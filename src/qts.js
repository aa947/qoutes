import React, { Component } from 'react';
import qts_data from './qts_data';
import './App.css';
class Qoutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: getRandomInt(qts_data.length)
    };
   console.log(this.state.number);
   this.changNum = this.changNum.bind(this);

}

changNum (){
  return this.setState({
    number: getRandomInt(qts_data.length)   
  });
}

  // change code above this line
  render() {
   return (
       <div>
           <h1> quotes </h1>
           <p> qoute:  {qts_data[this.state.number].quote} </p>
           <p> author:  {qts_data[this.state.number].author} </p>
           <button onClick={this.changNum}>another qoute</button>
          <button><a class="twitter-share-button"
  href={"https://twitter.com/intent/tweet?text="+qts_data[this.state.number].quote}>
Tweet</a> </button>
{/* <a href={qts_data[this.state.number].quote} class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
       </div>
   );
  }
};


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


export default Qoutes;

