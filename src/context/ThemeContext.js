import React from 'react'

const ThemeContext = React.createContext({
  activeTheme: '',
  savedVideos: [],
  changeTheme: () => {},
  addSavedVideos: () => {},
})

export default ThemeContext
