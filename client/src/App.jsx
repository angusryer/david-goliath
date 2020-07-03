import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Visualization from './components/Visualization';
import ItemList from './components/ItemList';
import './App.scss';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Header />
        <Input />
        <div className="app__visual-list">
          <Visualization />
          <ItemList />
        </div>
      </div>
    );
  }
}

export default App;
