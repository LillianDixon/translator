import React, { Component } from 'react';

import Translator from "./translator";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Translator />
      </div>
    );
  }
}
