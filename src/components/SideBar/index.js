import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'

import {
  ListItem,
  UnorderedList,
  FooterContainer,
  Heading,
  LogoContainer,
  Logo,
  Description,
} from './styledComponents'

import './index.css'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {activeTheme} = value

      return (
        <>
          <UnorderedList>
            <Link to="/" className="link-item">
              <ListItem mode={activeTheme}>
                <AiFillHome /> Home
              </ListItem>
            </Link>
            <Link to="/trending" className="link-item">
              <ListItem mode={activeTheme}>
                <AiFillFire /> Trending
              </ListItem>
            </Link>
            <Link to="/gaming" className="link-item">
              <ListItem mode={activeTheme}>
                <SiYoutubegaming /> Gaming
              </ListItem>
            </Link>
            <Link to="/saved-videos" className="link-item">
              <ListItem mode={activeTheme}>
                <RiMenuAddLine /> Saved Videos
              </ListItem>
            </Link>
          </UnorderedList>
          <FooterContainer>
            <Heading mode={activeTheme}>CONTACT US</Heading>
            <LogoContainer>
              <Logo
                alt="facebook logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              />
              <Logo
                alt="twitter logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              />
              <Logo
                alt="linked in logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              />
            </LogoContainer>
            <Description mode={activeTheme}>
              Enjoy!Now to see your <br />
              channels and <br />
              recommendations!
            </Description>
          </FooterContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default SideBar
