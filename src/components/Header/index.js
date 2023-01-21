import {Link, withRouter} from 'react-router-dom'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  NavBar,
  LogoImg,
  UnorderedList,
  ListItem,
  ThemeButton,
  ProfileImg,
  MenuButton,
  LogoutButton,
  LogoutIcon,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {activeTheme, changeTheme} = value
      // console.log('consuming')
      const onClickThemeButton = () => {
        const theme = activeTheme === 'light' ? 'dark' : 'light'
        changeTheme(theme)
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/')
      }

      return (
        <NavBar>
          <Link to="/">
            {activeTheme === 'light' ? (
              <LogoImg
                atl="website logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              />
            ) : (
              <LogoImg
                alt="website logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              />
            )}
          </Link>
          <UnorderedList>
            <ListItem>
              <ThemeButton
                data-testid="theme"
                type="button"
                mode={activeTheme}
                onClick={onClickThemeButton}
              >
                {activeTheme === 'light' ? (
                  <BsMoon size={35} />
                ) : (
                  <BsBrightnessHigh size={35} />
                )}
              </ThemeButton>
            </ListItem>
            <ListItem>
              <ThemeButton type="button">
                <ProfileImg
                  alt="profile"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                />
              </ThemeButton>
              <MenuButton type="button" mode={activeTheme}>
                <GiHamburgerMenu size={35} />
              </MenuButton>
            </ListItem>
            <ListItem>
              <LogoutButton onClick={onClickLogout}>Logout</LogoutButton>
              <LogoutIcon mode={activeTheme} onClick={onClickLogout}>
                <FiLogOut size={35} />
              </LogoutIcon>
            </ListItem>
          </UnorderedList>
        </NavBar>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
