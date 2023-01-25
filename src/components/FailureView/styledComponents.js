import styled from 'styled-components'

export const FailureViewBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'roboto';
`
export const Img = styled.img`
  height: 400px;
  width: 300px;
`
export const FailureViewHeading = styled.h1`
  font-size: 35px;
  color: ${props => (props.mode === 'light' ? '#000000' : '#ffffff')};
`
export const Para = styled.p`
  font-size: 23px;
  color: #909090;
`

export const RetryButton = styled.button`
  border-style: none;
  background-color: #4f46e5;
  width: 85px;
  height: 40px;
  border-radius: 9px;
  color: #ebebeb;
`
