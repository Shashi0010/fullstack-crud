import { Component, Fragment } from 'react';
import './App.css';
import Header from "../src/components/Header"
import Home from "../src/components/Home"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Home />
      </Fragment>
    );
  }
}
export default App;
