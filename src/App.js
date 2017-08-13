import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const base = [
  "pies","kot","ameba","alfabet","pistolet","kotwica","kanapka","kalafior","karton","kantor",
  "parowoz", "pionek", "paczka", "antyrama", "kaczka", "xd"
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
    if(value === ""){
      this.setState({currentList: []});
    }
    else{
      value = value.toLowerCase();
      let newlist = [];
      for(let i=0;i<this.state.list.length;i++){
          if(this.state.list[i].search(value)===0){
            newlist.push(this.state.list[i]);
          }
      }
      this.setState({currentList: newlist});
    }
  }
  render() {
    let t = this.state.currentList
    t = t.map((v)=>{return <li><a href={'https://website.com/'+v}>{v}</a></li>});
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
