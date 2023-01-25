import ThemeContext from '../../context/ThemeContext'

import {
  FailureViewBgContainer,
  Img,
  FailureViewHeading,
  Para,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => onRetry()

  return (
    <ThemeContext.Consumer>
      {value => {
        const {activeTheme} = value

        return (
          <FailureViewBgContainer>
            <Img
              alt="failure view"
              src={
                activeTheme === 'light'
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              }
            />
            <FailureViewHeading mode={activeTheme}>
              Oops! Something Went Wrong
            </FailureViewHeading>
            <Para>
              We are having some trouble to complete your request. Please try
              again.
            </Para>

            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailureViewBgContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default FailureView
