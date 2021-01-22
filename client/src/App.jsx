import React from "react";
import axios from "axios";
import Visualization from "./components/Visualization";
import ItemList from "./components/ItemList";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import Input from "./components/Input";

class App extends React.Component {
  state = {
    listObjects: [],
    selectedItem: null,
    userHeight: null,
  };

  componentDidMount() {
    axios.get('/objectlist').then((res) => {
      this.setState({        
        listObjects: res.data || [],
      });
    }).catch(err => console.error(`On Mount: ${err}`));
  }

  selectItem = (id) => {
    axios.get(`/objectlist/${parseInt(id)}`)
    .then(response => {
      this.setState({
        selectedItem: response.data || null,
      });
    }).catch(err => console.info(`No item with id ${id} found.`, err))

  };

  getInput = (value) => {
    this.setState({ userHeight: value || null });
  };

  render() {
    return (
      <Layout>
        <div className="app__container">
          <Input getInput={this.getInput} />
          <div className="app__visuals-container">
            <Visualization selectedItem={this.state.selectedItem} userHeight={this.state.userHeight}/>
            {this.state.listObjects && (
              <ItemList
                itemList={this.state.listObjects}
                selectItem={this.selectItem}
              />
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

export default App;
