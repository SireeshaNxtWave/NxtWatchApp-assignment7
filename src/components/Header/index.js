import {Link, withRouter} from 'react-router-dom'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

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
  PopupCard,
  Description,
  CancelButton,
  ConfirmButton,
  LogoutText,
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
        history.replace('/login')
      }

      return (
        <NavBar>
          <Link to="/">
            <LogoImg
              alt="website logo"
              src={
                activeTheme === 'light'
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              }
            />
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
              <Popup
                modal
                trigger={
                  <LogoutButton type="button">
                    <LogoutText>Logout</LogoutText>
                    <LogoutIcon mode={activeTheme}>
                      <FiLogOut size={35} />
                    </LogoutIcon>
                  </LogoutButton>
                }
              >
                {close => (
                  <PopupCard mode={activeTheme}>
                    <Description mode={activeTheme}>
                      Are you sure, you want to logout
                    </Description>
                    <CancelButton type="button" onClick={() => close()}>
                      Cancel
                    </CancelButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </PopupCard>
                )}
              </Popup>
            </ListItem>
          </UnorderedList>
        </NavBar>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
