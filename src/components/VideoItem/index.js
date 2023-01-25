import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {
  ListItem,
  EachCardContainer,
  CardImage,
  ProfileSection,
  ProfileImage,
  DetailsCard,
  Title,
  ChannelName,
  ViewsDetails,
  Views,
  PublishedTime,
} from './styledComponents'

import './index.css'

const VideoItem = props => {
  const {details, theme} = props

  const formattedDate = formatDistanceToNow(new Date(details.publishedAt))
  const partDate = formattedDate.indexOf(' ')
  // console.log(formattedDate)
  // console.log(formattedDate[parseInt(partDate) + 1])

  return (
    <Link to={`/videos/${details.id}`} className="link-item">
      <ListItem>
        <EachCardContainer>
          <CardImage alt="video thumbnail" src={details.thumbnailUrl} />
          <ProfileSection>
            <ProfileImage
              alt="channel logo"
              src={details.channel.profile_image_url}
            />
            <DetailsCard>
              <Title mode={theme}>{details.title}</Title>
              <ChannelName>{details.channel.name}</ChannelName>
              <ViewsDetails>
                <Views>{details.viewCount} views</Views>
                <PublishedTime>
                  . {formattedDate[parseInt(partDate) + 1]} years ago
                </PublishedTime>
              </ViewsDetails>
            </DetailsCard>
          </ProfileSection>
        </EachCardContainer>
      </ListItem>
    </Link>
  )
}

export default VideoItem
