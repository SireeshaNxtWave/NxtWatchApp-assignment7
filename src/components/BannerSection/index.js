import {ImCross} from 'react-icons/im'

import {
  BannerBgContainer,
  Logo,
  Description,
  Button,
  CrossButton,
} from './styledComponents'

const BannerSection = () => (
  <BannerBgContainer data-testid="banner">
    <div>
      <Logo
        alt="nxt watch logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      />
      <Description>Buy Nxt Watch Premium prepaid plans with UPI</Description>
      <Button>Get It Now</Button>
    </div>
    <CrossButton data-testid="close">
      <ImCross size={15} />
    </CrossButton>
  </BannerBgContainer>
)

export default BannerSection
