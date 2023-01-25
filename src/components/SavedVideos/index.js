import {Link} from 'react-router-dom'
import {AiFillFire} from 'react-icons/ai'
import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  SavedVideoBgContainer,
  SavedVideosContainer,
  SideBarContainer,
  NoVideosView,
  NoSavedImage,
  Heading,
  Description,
  UnorderedListItems,
  SavedListView,
  HeadingContainer,
  Button,
  SavedVideosHeading,
  ListItem,
  VideoThumbnailUrl,
  TitleName,
  ChannelName,
  ViewCountAndDate,
  ViewCount,
  PublishedTime,
} from './styledComponents'
import './index.css'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {activeTheme, savedVideos} = value
      // console.log(savedVideos.length)

      const renderNoVideosView = () => (
        <NoVideosView>
          <NoSavedImage
            alt="no saved videos"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          />
          <Heading mode={activeTheme}>No saved videos found</Heading>
          <Description>
            You can save your videos while watching them
          </Description>
        </NoVideosView>
      )

      const renderSavedVideosView = () => (
        <SavedListView>
          <HeadingContainer mode={activeTheme}>
            <Button mode={activeTheme}>
              <AiFillFire size={30} />
            </Button>
            <SavedVideosHeading mode={activeTheme}>
              Saved Videos
            </SavedVideosHeading>
          </HeadingContainer>
          <UnorderedListItems>
            {savedVideos.map(each => {
              const formattedDate = formatDistanceToNow(
                new Date(each.publishedAt),
              )
              const partDate = formattedDate.indexOf(' ')
              return (
                <ListItem>
                  <Link to={`/videos/${each.id}`} className="link-item">
                    <VideoThumbnailUrl
                      alt="video thumbnail"
                      src={each.thumbnailUrl}
                    />
                    <div>
                      <TitleName mode={activeTheme}>{each.title}</TitleName>
                      <ChannelName>{each.channel.name}</ChannelName>
                      <ViewCountAndDate>
                        <ViewCount>{each.viewCount} views</ViewCount>
                        <PublishedTime>
                          . {formattedDate[parseInt(partDate) + 1]} years ago
                        </PublishedTime>
                      </ViewCountAndDate>
                    </div>
                  </Link>
                </ListItem>
              )
            })}
          </UnorderedListItems>
        </SavedListView>
      )

      return (
        <SavedVideoBgContainer mode={activeTheme} data-testid="savedVideos">
          <Header />
          <SavedVideosContainer>
            <SideBarContainer>
              <SideBar />
            </SideBarContainer>
            {savedVideos.length === 0
              ? renderNoVideosView()
              : renderSavedVideosView()}
          </SavedVideosContainer>
        </SavedVideoBgContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
