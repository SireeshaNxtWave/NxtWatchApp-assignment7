import Header from '../Header'
import SideBar from '../SideBar'

import ThemeContext from '../../context/ThemeContext'

import {
  NotFoundBgContainer,
  NotFoundViewContainer,
  SideBarContainer,
  NotFoundView,
  NotFoundImage,
  NotFoundHeading,
  Description,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {activeTheme} = value

      return (
        <NotFoundBgContainer mode={activeTheme}>
          <Header />
          <NotFoundViewContainer>
            <SideBarContainer mode={activeTheme}>
              <SideBar />
            </SideBarContainer>
            <NotFoundView mode={activeTheme}>
              <NotFoundImage
                alt="not found"
                src={
                  activeTheme === 'light'
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                }
              />
              <NotFoundHeading mode={activeTheme}>
                Page Not Found
              </NotFoundHeading>
              <Description mode={activeTheme}>
                We are sorry, the page you requested could not be found.
              </Description>
            </NotFoundView>
          </NotFoundViewContainer>
        </NotFoundBgContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
