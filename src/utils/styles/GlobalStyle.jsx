import { createGlobalStyle } from 'styled-components'
import colors from '../../utils/styles/colors'


const StyledGlobalStyle = createGlobalStyle`
  body {
    font-family: Montserrat, sans-serif;
    margin: 0;
    background-color: ${ colors.secondary };;
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle