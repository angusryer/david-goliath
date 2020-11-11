import React from 'react';
import axios from 'axios';
import Visualization from './components/Visualization';
import ItemList from './components/ItemList';
import './App.scss';
import Layout from './components/Layout/Layout';

class App extends React.Component {
  state = {
    listObjects: [],
    selectedItem: null
  }

  componentDidMount() {
    axios
      .get("/objectlist")
      .then(res => {
        this.setState({
          listObjects: res.data
        })
      })
  }

  selectItem = id => {
    this.setState({
      selectedItem: id
    })
  }

  render() {
    return (
      <Layout>
        <div className="app__visual-list">
          <Visualization selectedItem={this.state.selectedItem}/>
          {this.state.listObjects && <ItemList itemList={this.state.listObjects} selectItem={this.selectItem} />}
        </div>
      </Layout>
    );
  }
}

export default App;
