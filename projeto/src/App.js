import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  //constructor(props) {
    //super(props);
    //this.handlePClick = this.handlePClick.bind(this); para nao fazer isso usar rrow function nos metodos
    /* this.state = {
      name: 'Josér Daci',
      counter: 0
    }; */
    state = {
      name: 'Josér Daci',
      counter: 0
    };
  //}
  
  handlePClick = () => {
    this.setState({name: 'Junior'})
  }

  handleAClick = (event) => {
    event.preventDefault();
    const {counter  } = this.state;
    
    this.setState({counter: counter + 1, name: 'Junior'})
  }


  render() {
    const {name, counter} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} | {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Este é o Link!
          </a>
        </header>
      </div> 
    );
  }
}
/* function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Olá Mundo!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> 
  );
} */

export default App;
