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
    axios.get("/objectlist").then((res) => {
      console.log(res.data)
      this.setState({        
        listObjects: res.data || [],
      });
    });
  }

  selectItem = (id) => {
    this.setState({
      selectedItem: id || null,
    });
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
            <Visualization selectedItem={this.state.selectedItem} />
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
