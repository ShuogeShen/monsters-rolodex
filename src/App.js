import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render() {
    // make a copy of 'monsters' and 'searchField'
    const monsters = this.state.monsters;
    const searchField = this.state.searchField;

    const fileteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          // pass in the 'placeholder' and 'handleChange' as props to the SearchBox
          placeholder='search monsters'
          handleChange={e => this.setState({searchField: e.target.value})}
        />
        // pass in the this.state.monsters as an 'props' to the CardList
        <CardList monsters={fileteredMonsters} />
      </div>
    );
  }
}

export default App;
