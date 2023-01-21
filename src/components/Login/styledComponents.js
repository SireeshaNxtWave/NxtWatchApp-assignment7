import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  padding: 50px;
  ${props => {
    switch (props.mode) {
      case 'light':
        return `
         null
        `
      default:
        return `
          background-color: #181818;
        `
    }
  }}
`
export const LoginCard = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 30px;
  width: 50%;
  height: 50%;
  ${props => {
    switch (props.mode) {
      case 'light':
        return `
                background-color: #ffffff;
                box-shadow: 5px 5px 5px 5px #f8fafc;
              `
      case 'dark':
        return `
                background-color: #0f0f0f;
              `
      default:
        return `null`
    }
  }}
`
export const WebsiteLogo = styled.img`
  align-self: center;
  width: 200px;
  height: 60px;
  margin-bottom: 30px;
`
export const LabelName = styled.label`
  color: ${props => (props.mode === 'light' ? '#475569' : '#ffffff')};
  font-size: 12px;
  margin-bottom: 10px;
`
export const Input = styled.input`
  border: 1px solid #475569;
  border-radius: 8px;
  color: #475569;
  height: 30px;
  padding: 10px;
  background-color: transparent;
  margin-bottom: 25px;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  border: 0px;
  color: #ffffff;
  border-radius: 8px;
  height: 30px;
  width: 100%;
  margin-top: 30px;
`
export const ErrorMsg = styled.p`
  font-size: 10px;
  color: #ff0000;
`
export const CheckboxLabel = styled.label`
  color: ${props => (props.mode === 'light' ? '#1e293b' : '#ffffff')};
`
