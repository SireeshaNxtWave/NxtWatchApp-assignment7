import styled from 'styled-components'

export const TrendingBgContainer = styled.div`
  background-color: ${props =>
    props.mode === 'light' ? '#f9f9f9' : '#0f0f0f'};
`
export const TrendingVideosListContainer = styled.div`
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
export const VideosContainer = styled.div`
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
