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
import store from '../dummy-store';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        username: ""
      },
      exchanges: []
    }
  }

  updateUser = (username, userId) => {
    const exchanges = store.exchanges.filter(ex => ex.created_by === userId)
    this.setState({
      user: {
        username,
        id: userId
      },
      exchanges
    })
  }


  render() {
    const contextValue = {
      user: this.state.user,
      exchanges: this.state.exchanges,
      updateUser: this.updateUser
    }

    return (
      <RotationContext.Provider value={contextValue}>
          <div className="App">
            <Nav username={this.state.user.username}/>

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
