import './App.css';
import { Component } from 'react';
import Nav from '../Nav/Nav';
import { Route } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Login from '../Login/Login'
import RotationContext from '../RotationContext'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        username: ""
      }
    }
  }

  updateUser = (username) => {
    this.setState({
      user: {
        username
      }
    })
  }


  render() {
    const contextValue = {
      updateUser: this.updateUser
    }

    return (
      <RotationContext.Provider value={contextValue}>
          <div className="App">
            <Nav username={this.state.user.username}/>
            <Route exact path={'/signup'} component={Signup}/>
            <Route exact path={'/login'} component={Login}/>
          </div>
      </RotationContext.Provider>
    );
  }
}

export default App;
