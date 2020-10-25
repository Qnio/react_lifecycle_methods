import React from 'react';

class LightBulb extends React.Component {
  constructor() {
    super();
    console.log('LightBulb constructor initialized!');
  }

  componentDidMount() {
    console.log('LightBulb componentDidMount!');
  }

  componentDidUpdate() {
    console.log('LightBulb componentDidUpdate!');
  }

  componentWillUnmount() {
    console.log('LightBulb componentWillUnmount!');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('LightBulb shouldComponentUpdate!', nextProps);
    return nextProps.light !== this.props.light;
  }

  render() {
    console.log('LightBulb render!');
    return (
      <div>
        <h1>{this.props.light ? 'ON' : 'OFF'}</h1>
      </div>
    );
  }
}

export default LightBulb;
