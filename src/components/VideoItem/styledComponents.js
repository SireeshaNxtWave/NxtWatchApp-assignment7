import styled from 'styled-components'

export const ListItem = styled.li`
  list-style: none;
  margin-right: 10px;
  margin-bottom: 30px;
  width: 30%;
  @media screen and (max-width: 575px) {
    width: 100%;
  }
  @media screen and ((min-width: 576px) and (max-width: 767px)) {
    width: 40%;
  }
`
export const EachCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const CardImage = styled.img`
  width: 100%;
`
export const ProfileSection = styled.div`
  display: flex;
  margin-top: 15px;
  align-items: flex-start;
`
export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`
export const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.p`
  color: ${props => (props.mode === 'light' ? '#383838' : '#ffffff')};
  font-size: 12px;
`
export const ChannelName = styled.p`
  color: #909090;
  font-size: 10px;
`
export const ViewsDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Views = styled.p`
  font-size: 10px;
  color: #909090;
`
export const PublishedTime = styled.p`
  font-size: 10px;
  color: #909090;
`
