import ReactPlayer from 'react-player'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'

import {
  VideoItemDetailsBgContainer,
  VideoDetailsView,
  SideContainer,
  VideoView,
  VideoTitleName,
  DetailsView,
  ViewCountAndDate,
  ViewCount,
  PublishedTime,
  ButtonContainer,
  Button,
  ChannelDetailsView,
  ChannelLogo,
  ChannelDetails,
  ChannelName,
  SubscribersCount,
  Description,
  DislikeButton,
  SaveButton,
} from './styledComponents'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: data.video_details.channel,
        viewCount: data.video_details.view_count,
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
      }

      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickLikeButton = () => {
    // console.log('like button clicked')
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDislikeButton = () => {
    // console.log('Dislike button clicked')
    this.setState(prevState => ({
      isLiked: false,
      isDisliked: !prevState.isDisliked,
    }))
  }

  render() {
    const {videoDetails, apiStatus, isLiked, isDisliked, isSaved} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeTheme, addSavedVideos} = value

          const onClickSaveButton = () => {
            console.log('save btn clicked')
            this.setState(prevState => ({isSaved: !prevState.isSaved}))
            addSavedVideos(videoDetails)
          }

          const onRetry = () => this.getVideoDetails()

          const renderLoadingView = () => (
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
            </div>
          )

          const renderFailureView = () => <FailureView onRetry={onRetry} />

          const renderSuccessView = () => {
            const formattedDate = formatDistanceToNow(
              new Date(videoDetails.publishedAt),
            )
            const partDate = formattedDate.indexOf(' ')
            return (
              <VideoView>
                <ReactPlayer url={videoDetails.videoUrl} width="100%" />

                <VideoTitleName mode={activeTheme}>
                  {videoDetails.title}
                </VideoTitleName>
                <DetailsView>
                  <ViewCountAndDate>
                    <ViewCount>{videoDetails.viewCount} views</ViewCount>
                    <PublishedTime>
                      . {formattedDate[parseInt(partDate) + 1]} years ago
                    </PublishedTime>
                  </ViewCountAndDate>
                  <ButtonContainer>
                    <Button
                      type="button"
                      btnColor={isLiked}
                      onClick={this.onClickLikeButton}
                    >
                      <BiLike size={20} /> Like
                    </Button>
                    <DislikeButton
                      type="button"
                      btnColor={isDisliked}
                      onClick={this.onClickDislikeButton}
                    >
                      <BiDislike size={20} /> Dislike
                    </DislikeButton>
                    <SaveButton
                      type="button"
                      btnColor={isSaved}
                      onClick={onClickSaveButton}
                    >
                      <MdPlaylistAdd size={20} /> {isSaved ? 'Saved' : 'Save'}
                    </SaveButton>
                  </ButtonContainer>
                </DetailsView>
                <hr className="horizontal-line" />
                <ChannelDetailsView>
                  <ChannelLogo
                    alt="channel logo"
                    src={videoDetails.channel.profile_image_url}
                  />
                  <ChannelDetails>
                    <ChannelName mode={activeTheme}>
                      {videoDetails.channel.name}
                    </ChannelName>
                    <SubscribersCount>
                      {videoDetails.channel.subscriber_count} subscribers
                    </SubscribersCount>
                    <Description mode={activeTheme}>
                      {videoDetails.description}
                    </Description>
                  </ChannelDetails>
                </ChannelDetailsView>
              </VideoView>
            )
          }

          const renderVideoView = () => {
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
            <VideoItemDetailsBgContainer
              mode={activeTheme}
              data-testid="videoItemDetails"
            >
              <Header />
              <VideoDetailsView>
                <SideContainer>
                  <SideBar />
                </SideContainer>
                {renderVideoView()}
              </VideoDetailsView>
            </VideoItemDetailsBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
