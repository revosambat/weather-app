import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Dashboard from './containers/dashboard';
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import BackgroundImage from "./assets/weather-app-bg.jpeg"

const MainContainer = styled(Container)`
  background-image: url(${BackgroundImage});
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  box-shadow: -1px -1px 47px 30px #424242;
`
function App() {
  return (
    <MainContainer>
      <Dashboard />
    </MainContainer>
  )
}

export default App
