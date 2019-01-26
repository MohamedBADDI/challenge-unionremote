import React, { Component } from 'react';
import Header from './Components/HeaderBlock/Header'
import Content from './Components/BodyBlock/Content'


class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Content />
      </div>
    );
  }
}

export default App;
