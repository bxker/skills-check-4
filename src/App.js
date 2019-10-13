import React, {Component} from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
// import Login from './Components/Login/Login'
import routes from './routes';
import Login from './Components/Login/Login';
import {connect} from 'react-redux';
import {getSession} from '../src/redux/reducers/userReducer';

class App extends Component {
  componentDidMount(){
    this.props.getSession();
  }

  render(){
    return (
      <div className="App">
        {!this.props.user_id ?
          <Login />
          :
          <div className="main-flex">
            <Nav />
            {routes}
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return {
      user_id: reduxState.userReducer.user_id
  }
}
export default connect(mapStateToProps, {
  getSession
})(App)
