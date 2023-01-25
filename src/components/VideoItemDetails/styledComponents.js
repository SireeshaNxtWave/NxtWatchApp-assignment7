import styled from 'styled-components'

export const VideoItemDetailsBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'roboto';
  background-color: ${props =>
    props.mode === 'light' ? '#f9f9f9' : '#0f0f0f'};
`
export const VideoDetailsView = styled.div`
  display: flex;
  width: 100%;
`
export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  @media screen and (max-width: 767px) {
    display: none;
    width: 0px;
  }
`
export const VideoView = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 20px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const VideoTitleName = styled.p`
  color: ${props => (props.mode === 'light' ? '#212121' : '#ffffff')};
  font-size: 20px;
`
export const DetailsView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const ViewCountAndDate = styled.div`
  display: flex;
  padding: 0px;
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
  margin-left: 10px;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const Button = styled.button`
  background-color: transparent;
  border-style: none;
  color: ${props => (props.btnColor ? '#2563eb' : '#64748b')};
`
export const DislikeButton = styled(Button)`
  color: ${props => (props.btnColor ? '#2563eb' : '#64748b')};
`
export const SaveButton = styled(Button)`
  color: ${props => (props.btnColor ? '#2563eb' : '#64748b')};
`

export const ChannelDetailsView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const ChannelLogo = styled.img`
  height: 60px;
  width: 60px;
  margin: 10px;
`
export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.p`
  color: ${props => (props.mode === 'light' ? '#212121' : '#ffffff')};
  font-size: 18px;
  margin-bottom: 0px;
`
export const SubscribersCount = styled.p`
  color: #909090;
  font-size: 16px;
`
export const Description = styled.p`
  color: ${props => (props.mode === 'light' ? '#424242' : '#ffffff')};
  font-size: 16px;
`
