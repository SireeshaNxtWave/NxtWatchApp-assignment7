import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {AiOutlineSearch} from 'react-icons/ai'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import BannerSection from '../BannerSection'
import FailureView from '../FailureView'
import VideoItem from '../VideoItem'

import {
  HomeBgContainer,
  VideosListContainer,
  ListContainer,
  SideBarContainer,
  VideosContainer,
  SearchContainer,
  InputEl,
  SearchButton,
  NoResultsContainer,
  NoResultsImg,
  NoResultsHeading,
  Des,
  RetryButton,
  UnorderedListContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Home extends Component {
  state = {
    searchInput: '',
    videoList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoList()
  }

  getVideoList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    console.log(searchInput)

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)

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
        videoList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value}, () => this.getVideoList())
  }

  render() {
    const {searchInput, videoList} = this.state
    //  console.log('render')

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeTheme} = value

          const onRetry = () => {
            this.setState({searchInput: ''}, () => this.getVideoList())
          }

          const renderLoadingView = () => (
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
            </div>
          )

          const renderNoResultsView = () => (
            <NoResultsContainer>
              <NoResultsImg
                alt="no videos"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              />
              <NoResultsHeading mode={activeTheme}>
                No Search results found
              </NoResultsHeading>
              <Des>Try different key words or remove search filter</Des>
              <RetryButton type="button" onClick={onRetry}>
                Retry
              </RetryButton>
            </NoResultsContainer>
          )

          const renderVideoListView = () => (
            <UnorderedListContainer>
              {videoList.map(each => (
                <VideoItem key={each.id} details={each} theme={activeTheme} />
              ))}
            </UnorderedListContainer>
          )

          const renderFailureView = () => <FailureView onRetry={onRetry} />

          const renderSuccessView = () => (
            <div>
              {videoList.length === 0
                ? renderNoResultsView()
                : renderVideoListView()}
            </div>
          )

          const renderList = () => {
            const {apiStatus} = this.state
            // console.log('rendering view')

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
            <HomeBgContainer mode={activeTheme} data-testid="Home">
              <Header />
              <VideosListContainer>
                <SideBarContainer>
                  <SideBar />
                </SideBarContainer>
                <ListContainer>
                  <BannerSection />
                  <VideosContainer>
                    <SearchContainer>
                      <InputEl
                        type="search"
                        placeholder="search"
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                      />
                      <SearchButton
                        type="button"
                        data-testid="searchButton"
                        onClick={this.onChangeSearchInput}
                      >
                        <AiOutlineSearch size={20} />
                      </SearchButton>
                    </SearchContainer>
                    {renderList()}
                  </VideosContainer>
                </ListContainer>
              </VideosListContainer>
            </HomeBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
