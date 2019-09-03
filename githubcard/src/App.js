import React from 'react';
import './App.css';
import axios from 'axios';

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

    </div>
  );
  }
}

export default App;
