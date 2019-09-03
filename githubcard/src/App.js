import React from 'react';
import './App.css';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import FlexContainer from 'react-styled-flexbox';


import CardChild from './CardChild';
import FollowersChild from './FollowersChild';

class App extends React.Component {

  state = {
    cards: [],
    followers: []
  };

  componentDidMount(){
    axios
      .get('https://api.github.com/users/rogermcconkiejr')
      .then((response) => {
        console.log('data:', response)
        this.setState({cards: response.data})
      })
      .catch(err => console.log('error'));
    axios
      .get('https://api.github.com/users/rogermcconkiejr/followers')
      .then((response) => {
        console.log('follower data:', response)
        this.setState({followers: response.data})
      })
      .catch(err => console.log('error'));
  }
  render(){
  return (

    <div className="App">
      <h1 className="titleatty">GitHub Cards</h1>
      <div className = "cardWrapper">
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
    <FlexContainer wrapWrap = {true} justifySpaceAround = {true}>
    {this.state.followers.map(follower =>{
      return (
        
             <FollowersChild
             key = {follower.id}
             image = {follower.avatar_url}
             username = {follower.login}
             />
        
      )
    })}
    </FlexContainer>
    </div>
  );
  }
}

export default App;
