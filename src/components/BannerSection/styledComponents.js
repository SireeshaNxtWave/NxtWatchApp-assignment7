import styled from 'styled-components'

export const BannerBgContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 400px;
  width: 100%;
  padding: 20px;
  background-size: cover;
  font-family: 'roboto';
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 575px) {
    background-color: #ffffff;
  }
`
export const Logo = styled.img`
  width: 90px;
  height: 30px;
`
export const Description = styled.p`
  font-size: 25px;
  color: #181818;
`
export const Button = styled.button`
  background-color: transparent;
  border: 1px solid #181808;
  color: #181818;
  width: 90px;
  height: 30px;
`
export const CrossButton = styled.button`
  background-color: transparent;
  border: 0px;
`
