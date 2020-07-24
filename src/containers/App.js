import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
        robots: [],
        searchfield: ''
    } // this is what actually changes in the app
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({ robots: users })}); /*note that 'users' is an arbitrary var here, not something in the fetched data*/
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value }) // searchfield gets set to the value of the event input, which comes from the SearchBox onChange in SearchBox.js
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ?
    <h1>Loading...</h1> : // in case we have nothing in the fetch OR it takes a long time
    (
      <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
}

export default App;