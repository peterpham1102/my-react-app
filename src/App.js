import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hello MTF</h1>
       <p>yeah</p>
        <Person name="Peter" age="11" />
        <Person name="Mars" age="43" >Something</Person>
        <Person name="Ass" age="112"/>


      </div>
    );
    // return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'Hello MTF'));
  }
}

export default App;
