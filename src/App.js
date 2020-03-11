import React, { Component } from 'react';
import './App.css';
import {todos} from './todos.json';


class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }
  }

  render(){
    this.state.todos.map((todo, i) =>{
      return(
        <div className="card">
          <div className="card-header">
            <h3>{todo.tilte}</h3>
          </div>
        <div className="card-body">
      <p>{todo.description}</p>

        </div>
        </div>
      )
    })


  return (
    <div className="App">
   <nav className="navbar navbar-dark bg-dark">
            <a href="" className="text-white">
            
      {todos}
            
            </a>
            
            </nav>
    </div>
  );
}
}

export default App;
