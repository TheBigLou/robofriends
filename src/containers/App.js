import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: '',
            filteredBots: []
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    onSearchSubmit = (e) => {
        if (e) {e.preventDefault();}
        this.setState({
            filteredBots: this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
            }),
        });
    }

    resetSearch = () => {
        this.setState({
            searchField: ''
        }, () => {
            this.onSearchSubmit();
        });
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users, filteredBots: users  }));
    }

    render() {
        const { robots, filteredBots } = this.state;
        return !robots.length ? <h1 className='f1 mb3 tc'>Loading robots...</h1> :
            (
            <div className='tc'>
                <h1 className='f1 mb3'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} searchSubmit={this.onSearchSubmit} resetSearch={this.resetSearch} />
                <Scroll>
                <CardList robots={filteredBots} />
                </Scroll>
            </div>
            );
        }
}

export default App;