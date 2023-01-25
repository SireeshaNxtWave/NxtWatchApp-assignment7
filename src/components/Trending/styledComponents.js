import styled from 'styled-components'

export const TrendingBgContainer = styled.div`
  background-color: ${props =>
    props.mode === 'light' ? '#f9f9f9' : '#0f0f0f'};
  font-family: 'roboto';
`
export const TrendingVideosListContainer = styled.div`
  display: flex;
  width: 100%;
`
export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  @media screen and (max-width: 767px) {
    display: none;
    width: 0px;
  }
`
export const VideosContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
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
export const TrendingHeading = styled.h1`
  color: ${props => (props.mode === 'light' ? '#212121' : '#ffffff')};
`
export const UnorderedList = styled.ul`
  width: 100%;
  @media screen and (min-width: 576px) {
    padding: 20px;
  }
`
export const ListItem = styled.li`
  list-style-type: none;
  width: 100%;
  margin-bottom: 25px;
`
export const Card = styled.div`
  width: 100%;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: row;
  }
`
export const ThumbnailUrlImage = styled.img`
  width: 95%;
  @media screen and (min-width: 576px) {
    width: 50%;
  }
`
export const DetailsContainer = styled.div`
  @media screen and (max-width: 575px) {
    margin-top: 20px;
    display: flex;
    align-items: flex-start;
  }
`

export const LogoImage = styled.img`
  width: 60px;
  height: 60px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const DescriptionCard = styled.div`
  margin-left: 20px;
`
export const TitleName = styled.p`
  color: ${props => (props.mode === 'light' ? '#000000' : '#ffffff')};
  font-size: 30px;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 19px;
  }
`
export const ChannelName = styled.p`
  font-size: 20px;
  color: #909090;
  @media screen and (min-width: 576px) {
    font-size: 12px;
  }
`
export const ViewPublishedDetails = styled.div`
  display: flex;
  justify-content: space-around;
`
export const ListItem2 = styled.p`
  color: #909090;
  font-size: 20px;
  @media screen and (min-width: 576px) {
    font-size: 12px;
  }
`
