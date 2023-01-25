import styled from 'styled-components'

export const NotFoundBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'roboto';
  background-color: ${props =>
    props.mode === 'light' ? '#ffffff' : ' #383838'};
`
export const NotFoundViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  background-color: ${props =>
    props.mode === 'light' ? '#ffffff' : ' #383838'};
  @media screen and (max-width: 767px) {
    display: none;
    width: 0px;
  }
`
export const NotFoundView = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px;
  background-color: ${props =>
    props.mode === 'light' ? '#ebebeb' : '#000000'};
`
export const NotFoundImage = styled.img`
  width: 300px;
  height: 300px;
`
export const NotFoundHeading = styled.h1`
  color: ${props => (props.mode === 'light' ? '#000000' : '#ffffff')};
  font-size: 25px;
`
export const Description = styled.p`
  font-size: 18px;
  color: ${props => (props.mode === 'light' ? ' #383838' : '#f4f4f4')};
`
