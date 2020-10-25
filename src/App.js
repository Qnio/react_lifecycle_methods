import React from 'react';
import logo from './8design_logo_250.png';
import './App.css';
import LightBulb from './components/lightbulb/lightbulb.component';

class App extends React.Component {
  constructor() {
    super();
    console.log('App constructor initialized!');
    this.state = {
      name: 'Piotrek',
      email: 'myemail@gmail.com',
      message: '',
      light: true
    };
  }

  componentDidMount() {
    console.log('App componentDidMount!');
  }

  render() {
    console.log('App render!');
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <button onClick={() => this.setState(state => console.log(state))}>
            Show state
          </button>
          <button
            onClick={() =>
              this.setState(
                state => ({ message: state.message + '_Hello!' }),
                () => console.log(this.state)
              )
            }
          >
            Add message
          </button>
          <button
            onClick={() =>
              this.setState(
                state => ({ message: '' }),
                () => console.log(this.state)
              )
            }
          >
            Clear message
          </button>
          <LightBulb light={this.state.light} />
          <button
            onClick={() => this.setState(stan => ({ light: !stan.light }))}
          >
            Switch light
          </button>
        </header>
      </div>
    );
  }
}

export default App;
