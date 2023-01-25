import styled from 'styled-components'

export const SavedVideoBgContainer = styled.div`
  background-color: ${props =>
    props.mode === 'light' ? '#f9f9f9' : '#0f0f0f'};
  font-family: 'roboto';
`
export const SavedVideosContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
`

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  @media screen and (max-width: 767px) {
    display: none;
    width: 0px;
  }
`
export const NoVideosView = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoSavedImage = styled.img`
  width: 40%;
  height: 95%;
`
export const Heading = styled.h1`
  font-size: 20px;
  color: ${props => (props.mode === 'light' ? '#212121' : '#ffffff')};
`
export const Description = styled.p`
  font-size: 17px;
  color: #909090;
`
export const UnorderedListItems = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const HeadingContainer = styled.div`
  background-color: ${props =>
    props.mode === 'light' ? '#d7dfe9' : '#383838'};
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 60px;
`
export const Button = styled.button`
  background-color: ${props =>
    props.mode === 'light' ? '#cbd5e1' : '#0f0f0f'};
  border-radius: 50px;
  border: 0px;
  height: 70px;
  width: 70px;
  color: #ff0000;
  margin-right: 20px;
`
export const SavedVideosHeading = styled.h1`
  color: ${props => (props.mode === 'light' ? '#212121' : '#ffffff')};
`
export const ListItem = styled.li`
  list-style-type: none;
  width: 100%;
`
export const SavedListView = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const VideoThumbnailUrl = styled.img`
  width: 100%;
  margin-right: 25px;
`
export const TitleName = styled.p`
  color: ${props => (props.mode === 'light' ? ' #212121' : '#ffffff')};
  font-size: 18px;
`
export const ChannelName = styled.p`
  font-size: 16px;
  color: #909090;
`
export const ViewCount = styled.p`
  color: #909090;
  font-size: 16px;
  margin-left: 0px;
  margin-right: 15px;
`
export const PublishedTime = styled.p`
  color: #909090;
  font-size: 16px;
`
export const ViewCountAndDate = styled.div`
  display: flex;
`
