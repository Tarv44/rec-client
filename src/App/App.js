import './App.css';
import { Component } from 'react';
import Nav from '../Nav/Nav';
import { Route } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import RotationContext from '../RotationContext';
import Dashboard from '../Dashboard/Dashboard';
import AddEx from '../AddEx/AddEx';
import Exchange from '../Exchange/Exchange';
import config from '../config';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_user: {
        username: "",
        id: null
      },
      current_exchanges: []
    }
  }

  getExchanges = (userId) => {
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }

    return fetch(`${config.API_ENDPOINT}/users/${userId}/exchanges`, options)
      .then(res => {
        if (!res.ok) {
          return res.json().then(err => { throw err })
        }
        return res.json()
      })
  }

  updateExchanges = () => {
    this.getExchanges(this.state.current_user.id)
      .then(current_exchanges => {
        this.setState({ current_exchanges })
      })
  }

  updateUser = (username, userId) => {
    this.getExchanges(userId)
      .then(current_exchanges => {
        this.setState({
          current_user: {
            username,
            id: userId
          },
          current_exchanges
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const contextValue = {
      current_user: this.state.current_user,
      current_exchanges: this.state.current_exchanges,
      updateUser: this.updateUser,
      updateExchanges: this.updateExchanges
    }

    return (
      <RotationContext.Provider value={contextValue}>
          <div className="App">
            <Nav username={this.state.current_user.username}/>

            <Route exact path={'/signup'} component={Signup}/>
            <Route exact path={'/login'} component={Login}/>
            <Route exact path={'/dashboard'} component={Dashboard}/>
            <Route exact path={'/add-exchange'} component={AddEx}/>
            <Route exact path={'/'} component={Landing}/>
            <Route exact path={'/exchange/:exId'} component={Exchange}/>

            <Footer />
          </div>
      </RotationContext.Provider>
    );
  }
}

export default App;
