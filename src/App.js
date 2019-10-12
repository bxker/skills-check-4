import React, {Component} from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
// import Login from './Components/Login/Login'
import routes from './routes';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Nav />
        {routes}
      </div>
    )
  }
}

export default App;
