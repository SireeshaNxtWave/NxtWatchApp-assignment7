import styled from 'styled-components'

export const UnorderedList = styled.ul`
  width: 100%;
`
export const ListItem = styled.li`
  font-size: 13px;
  list-style: none;
  color: ${props => (props.mode === 'light' ? '#212121' : '#ebebeb')};
`
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`
export const Heading = styled.p`
  color: ${props => (props.mode === 'light' ? '#212121' : '#ebebeb')};
  font-size: 23px;
`
export const LogoContainer = styled.div`
  display: flex;
`
export const Logo = styled.img`
  height: 45px;
  width: 45px;
  margin-right: 20px;
`
export const Description = styled.p`
  color: ${props => (props.mode === 'light' ? '#212121' : '#ebebeb')};
  font-size: 17px;
`
