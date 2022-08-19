import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    cards: {
      _embedded: {
        cardList: []
      },
      _links: []
    }
  }

  async componentDidMount() {
    const response = await fetch('/cards')
    const body = await response.json()
    this.setState({ cards: body })
  }

  render() {

    const { cardList } = this.state.cards._embedded

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className='App-intro'>
            <h2>Cards</h2>
            {cardList.map(
              card => <div key={card.id}>
                {card.description}
              </div>
            )}
          </div>
        </header>
      </div>
    );
}
}

export default App;
