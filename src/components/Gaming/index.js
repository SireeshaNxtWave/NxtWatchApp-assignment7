import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Link, Redirect} from 'react-router-dom'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import ThemeContext from '../../context/ThemeContext'

import {
  GamingBgContainer,
  VideoViewContainer,
  SideBarContainer,
  VideoListContainer,
  HeadingContainer,
  Button,
  GamingHeading,
  UnorderedList,
  GameItem,
  Image,
  GamingTitle,
  ViewCount,
} from './styledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingVideosList: [],
  }

  componentDidMount() {
    this.getGamingVideosList()
  }

  getGamingVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))

      this.setState({
        gamingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  render() {
    const {gamingVideosList, apiStatus} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeTheme} = value

          const onRetry = () => this.getGamingVideosList()

          const renderLoadingView = () => (
            <div className="loader-container" data-testid="loader">
              <Loader
                type="ThreeDots"
                color={activeTheme === 'light' ? '#000000' : '#ffffff'}
                height="50"
                width="50"
              />
            </div>
          )

          const renderFailureView = () => <FailureView onRetry={onRetry} />

          const renderSuccessView = () => (
            <UnorderedList>
              {gamingVideosList.map(each => (
                <Link
                  to={`/videos/${each.id}`}
                  key={each.id}
                  className="link-item"
                >
                  <GameItem key={each.id}>
                    <Image alt="video thumbnail" src={each.thumbnailUrl} />
                    <GamingTitle mode={activeTheme}>{each.title}</GamingTitle>
                    <ViewCount>
                      {each.viewCount} Watching <br />
                      Worldwide
                    </ViewCount>
                  </GameItem>
                </Link>
              ))}
            </UnorderedList>
          )

          const renderVideoList = () => {
            switch (apiStatus) {
              case apiStatusConstants.success:
                return renderSuccessView()
              case apiStatusConstants.failure:
                return renderFailureView()
              case apiStatusConstants.inProgress:
                return renderLoadingView()

              default:
                return null
            }
          }

          return (
            <GamingBgContainer mode={activeTheme} data-testid="gaming">
              <Header />
              <VideoViewContainer>
                <SideBarContainer>
                  <SideBar />
                </SideBarContainer>
                <VideoListContainer>
                  <HeadingContainer mode={activeTheme}>
                    <Button mode={activeTheme}>
                      <SiYoutubegaming size={30} />
                    </Button>
                    <GamingHeading mode={activeTheme}>Gaming</GamingHeading>
                  </HeadingContainer>
                  {renderVideoList()}
                </VideoListContainer>
              </VideoViewContainer>
            </GamingBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
