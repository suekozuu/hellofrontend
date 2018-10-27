import React, { Component } from 'react';
import Menu from './Component/index/Menu';
import Beaver from './Component/index/Beaver';
import Text from './Component/index/Text';
import Footer from './Component/index/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      < Menu />
      <h1>Hello World</h1>
      < Beaver buttonName="Front-End"/>
      < Beaver buttonName="Design"/>
      < Beaver buttonName="Game"/>
      < Beaver buttonName="Infra"/>
      < Text textTitle="Front-End"/>
      < Text textTitle="Design"/>
      < Text textTitle="Game"/>
      < Text textTitle="Infra"/>
      < Footer />
      </div>
    );
  }
}

export default App;
