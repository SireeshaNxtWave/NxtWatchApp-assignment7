import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  background-color: ${props =>
    props.mode === 'light' ? '#f9f9f9' : '#181818'};
`
export const VideosListContainer = styled.div`
  display: flex;
  width: 100%;
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
export const ListContainer = styled.div`
  width: 70%;
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
