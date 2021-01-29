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
      current_user: {
        username: ""
      },
      current_exchanges: [],
      //Following values only for static use
      users: store.users,
      exchanges: store.exchanges,
      songs: store.songs,
      comments: store.comments
    }
  }

  updateUser = (username, userId, email, password) => {
    const current_exchanges = store.exchanges.filter(ex => ex.created_by === userId)
    this.setState({
      current_user: {
        username,
        id: userId
      },
      current_exchanges
    })

    //Following conditional for static use only
    if(this.state.users.indexOf(u => u.id === userId) === -1) {
      this.setState({
        users: [
          ...this.state.users,
          {
            id: userId,
            username,
            email,
            password
          }
        ]
      })
    }
  }

  staticUpdate(newSongs, exId) {
    //Function for updating songs and comments in static mode only
    let songId = this.state.songs.map(song => song.id).reduce((a,b) => Math.max(a,b)) + 1
    let commId = this.state.comments.map(comm => comm.id).reduce((a,b) => Math.max(a,b)) + 1
    const songs = this.state.songs
    const comments = this.state.comments
    for (let i = 0; i < newSongs.length; i++) {
      const song = {
        album: newSongs[i].album,
        artist: newSongs[i].artist,
        title: newSongs[i].title,
        exchange_id: exId,
        id: songId
      }
      const comm = {
        message: newSongs[i].comment,
        id: commId,
        created_by: this.state.current_user.id,
        song_id: songId
      }
      songs.push(song)
      comments.push(comm)
      songId++
      commId++
    }

    this.setState( { songs, comments } )
  }

  updateExchanges = exchange => {
    const newExchange = {
      created_by: exchange.created_by,
      date_created: exchange.date_created,
      description: exchange.description,
      id: exchange.id,
      title: exchange.title
    }
    const {current_exchanges, exchanges} = this.state

    current_exchanges.push(newExchange)
    exchanges.push(newExchange)

    this.setState( { current_exchanges, exchanges } )

    //Following line is for only for static use, adjust above as well.
    this.staticUpdate(exchange.newSongs, exchange.id)
  }


  render() {
    const contextValue = {
      current_user: this.state.current_user,
      current_exchanges: this.state.current_exchanges,
      updateUser: this.updateUser,
      addExchange: this.updateExchanges,
      //Following values only for static use
      users: this.state.users,
      exchanges: this.state.exchanges,
      songs: this.state.songs,
      comments: this.state.comments
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
