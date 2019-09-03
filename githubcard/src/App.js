import React from 'react';
import './App.css';
import axios from 'axios';

import CardChild from './CardChild';

class App extends React.Component {
  state = {
    cards: []
  };

  componentDidMount(){
    axios
      .get('https://api.github.com/users/rogermcconkiejr')
      .then((response) => {
        console.log('data:', response)
        this.setState({cards: response.data})
      })
      .catch(err => console.log('error'));
  }
  render(){
  return (

    <div className="App">
        <CardChild
        key = {this.state.cards.created_at}
        image = {this.state.cards.avatar_url}
        name = {this.state.cards.name}
        username = {this.state.cards.login}
        location = {this.state.cards.location}
        followers = {this.state.cards.followers}
        following = {this.state.cards.following}
        />
    </div>
  );
  }
}

export default App;
