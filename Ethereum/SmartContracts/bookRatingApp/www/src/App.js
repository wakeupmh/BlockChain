import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ratingContract } from "./EthereumSetup";
import {ShowBooks } from "./components/ShowBooks";

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      books : [{name:'Clean Code',rating:0},{name:'Clean Architecture',rating:0},{name:'Refactoring',rating:0}, {name:'Agile Software Development',rating:0}]
    }
    this.handleVoting=this.handleVoting.bind(this)
  }

handleVoting(book){
    ratingContract.voteForBook(book)
    let votes=ratingContract.totalVotesFor(book).toNumber()
    this.setState({books:this.state.books.map(
      (el)=>el.name===book? Object.assign({},el,{rating:votes}):el
    
    )});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Ethereum</h1>
        </header>
        <p className="App-intro">
          Book Rating Application in Ethereum and React
        </p>
        <div>
          <ShowBooks books={this.state.books} vote={this.handleVoting}/>
        </div>
      </div>
    );
  }
}

export default App;