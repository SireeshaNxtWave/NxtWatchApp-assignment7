import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'

import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {
    activeTheme: 'light',
    savedVideos: [],
  }

  onChangeTheme = activeTheme => {
    // console.log(activeTheme)
    this.setState({activeTheme})
  }

  onAddSavedVideos = async data => {
    const {savedVideos} = this.state
    if (savedVideos.length > 0) {
      const checkSavedVideos = savedVideos.filter(item => item.id === data.id)
      if (checkSavedVideos.length === 0) {
        await this.setState({
          savedVideos: [...savedVideos, data],
        })
      }
    } else {
      await this.setState({
        savedVideos: [...savedVideos, data],
      })
    }
  }

  render() {
    const {activeTheme, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          activeTheme,
          savedVideos,
          changeTheme: this.onChangeTheme,
          addSavedVideos: this.onAddSavedVideos,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
export default App
