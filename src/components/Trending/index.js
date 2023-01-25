import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Link, Redirect} from 'react-router-dom'

import {AiFillFire} from 'react-icons/ai'
import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'

import {
  TrendingBgContainer,
  TrendingVideosListContainer,
  SideContainer,
  VideosContainer,
  HeadingContainer,
  Button,
  TrendingHeading,
  UnorderedList,
  ListItem,
  ThumbnailUrlImage,
  Card,
  DetailsContainer,
  LogoImage,
  DescriptionCard,
  TitleName,
  ChannelName,
  ViewPublishedDetails,
  ListItem2,
} from './styledComponents'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    // console.log(data)
    if (response.ok === true) {
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: each.channel,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))

      this.setState({
        trendingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeTheme} = value

          const onRetry = () => this.getTrendingVideos()

          const renderLoadingView = () => (
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
            </div>
          )

          const renderFailureView = () => <FailureView onRetry={onRetry} />

          const renderSuccessView = () => {
            const {trendingVideosList} = this.state

            return (
              <UnorderedList>
                {trendingVideosList.map(each => {
                  const formattedDate = formatDistanceToNow(
                    new Date(each.publishedAt),
                  )
                  const partDate = formattedDate.indexOf(' ')
                  return (
                    <Link
                      to={`/videos/${each.id}`}
                      key={each.id}
                      className="link-item"
                    >
                      <ListItem key={each.id}>
                        <Card>
                          <ThumbnailUrlImage
                            alt="video thumbnail"
                            src={each.thumbnailUrl}
                          />
                          <DetailsContainer>
                            <LogoImage
                              alt="channel logo"
                              src={each.channel.profile_image_url}
                            />
                            <DescriptionCard>
                              <TitleName mode={activeTheme}>
                                {each.title}
                              </TitleName>
                              <ChannelName>{each.channel.name}</ChannelName>
                              <ViewPublishedDetails>
                                <ListItem2>. {each.viewCount} views</ListItem2>
                                <ListItem2>
                                  . {formattedDate[parseInt(partDate) + 1]}{' '}
                                  years ago
                                </ListItem2>
                              </ViewPublishedDetails>
                            </DescriptionCard>
                          </DetailsContainer>
                        </Card>
                      </ListItem>
                    </Link>
                  )
                })}
              </UnorderedList>
            )
          }

          const renderListView = () => {
            const {apiStatus} = this.state

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
            <TrendingBgContainer mode={activeTheme} data-testid="trending">
              <Header />
              <TrendingVideosListContainer>
                <SideContainer>
                  <SideBar />
                </SideContainer>
                <VideosContainer>
                  <HeadingContainer mode={activeTheme}>
                    <Button mode={activeTheme}>
                      <AiFillFire size={30} />
                    </Button>
                    <TrendingHeading mode={activeTheme}>
                      Trending
                    </TrendingHeading>
                  </HeadingContainer>
                  {renderListView()}
                </VideosContainer>
              </TrendingVideosListContainer>
            </TrendingBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
