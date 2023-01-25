import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  background-color: ${props =>
    props.mode === 'light' ? '#f9f9f9' : '#181818'};
  font-family: 'roboto';
`
export const VideosListContainer = styled.div`
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
export const ListContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`
export const SearchContainer = styled.div`
  display: flex;
`
export const InputEl = styled.input`
  width: 350px;
  border: 1px solid #94a3b8;
  color: #94a3b8;
  padding: 10px;
  background-color: ${props =>
    props.mode === 'light' ? '#ffffff' : 'transparent'};
`
export const SearchButton = styled.button`
  width: 50px;
  text-align: center;
  background-color: transparent;
  border: 1px solid #94a3b8;
  color: #94a3b8;
`
export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const NoResultsImg = styled.img`
  width: 250px;
  height: 400px;
`
export const NoResultsHeading = styled.h1`
  color: ${props => (props.mode === 'light' ? '#212121' : '#ffffff')};
  font-size: 25px;
`
export const Des = styled.p`
  color: #909090;
  font-size: 17px;
`
export const RetryButton = styled.button`
  width: 80px;
  height: 30px;
  color: #ffffff;
  border-style: none;
  border-radius: 7px;
  background-color: #4f46e5;
`
export const UnorderedListContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
