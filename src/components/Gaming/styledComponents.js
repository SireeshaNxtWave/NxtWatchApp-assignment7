import styled from 'styled-components'

export const GamingBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'roboto';
  background-color: ${props =>
    props.mode === 'light' ? '#f9f9f9' : '#0f0f0f'};
`
export const VideoViewContainer = styled.div`
  display: flex;
`
export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  @media screen and (max-width: 767px) {
    display: none;
    width: 0px;
  }
`
export const VideoListContainer = styled.div`
  width: 70%;
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
export const GamingHeading = styled.h1`
  color: ${props => (props.mode === 'light' ? '#212121' : '#ffffff')};
`
export const UnorderedList = styled.ul`
  display: flex;
  width: 100%;
  padding: 20px;
  flex-wrap: wrap;
`
export const GameItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 45%;
  margin: 20px;
  @media screen and (min-width: 576px) {
    width: 25%;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 350px;
`
export const GamingTitle = styled.p`
  color: ${props => (props.mode === 'light' ? '#000000' : '#ffffff')};
  font-size: 18px;
`
export const ViewCount = styled.p`
  color: #909090;
  font-size: 15px;
`
