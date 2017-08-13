import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const base = [
  "pies","kot","ameba","alfabet","pistolet","kotwica","kanapka","kalafior","karton","kantor",
  "parowoz", "pionek", "paczka", "antyrama"
];
class App extends Component {
  constructor(props){
    super(props)
    this.state={
        list: base,
        currentList: [],
    }
  }
  search(value){
    let newlist = [];
    if(value === ""){
      this.setState({currentList: []});
    }
    else{
      for(let i=0;i<this.state.list.length-1;i++){
          if(this.state.list[i].search(value)!==-1){
            newlist.push(this.state.list[i]);
          }
      }
      this.setState({currentList: newlist});
    }
  }
  render() {
    let t = this.state.currentList
    t = t.map((v)=>{return <li>{v}</li>});
    return (
      <div className="App">
        <input type="text" onChange = {(e)=>{this.search(e.target.value)}}/>
        <ul>
          {t}
        </ul>
      </div>
    );
  }
}

export default App;
