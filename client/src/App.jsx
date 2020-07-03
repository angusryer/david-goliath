import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Input from './components/Input';
import Visualization from './components/Visualization';
import ItemList from './components/ItemList';
import './App.scss';

class App extends React.Component {
  state = {
    listObjects: []
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080")
      .then(res => this.setState({
        listObjects: res.data
      }))
  }


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
