import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import BackgroundImage from "./assets/weather-app-bg.jpeg"
import Router from './router/Router';

const MainContainer = styled(Container)`
  background-image: url(${BackgroundImage});
  background-size: 100vw 100vh;
  height: 100vh;
`
function App() {
  return (
    <MainContainer maxWidth={false}>
      <Router />
    </MainContainer>
  )
}

export default App
