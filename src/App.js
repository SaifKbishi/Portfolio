import Header from './components/Header';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import LangAndTech from './components/LangAndTech';
import Projects from './components/Projects';
import SocialMedia from './components/SocialMedia';
import ContactMe from './components/ContactMe';
import {Container, Box} from '@mui/material/';
import { ThemeProvider } from '@mui/material/styles';
import portfolioTheme from './style/portfolioTheme';
import './style/customStyle.css';

function App() {
  return (
    <div id="mainDiv" className="App">
    <ThemeProvider theme={portfolioTheme}>
    <Container maxWidth='xl' id="mainContainer" sx={{color:'textColor', pb:1}}>
    <Box id="mainBox" sx={{mt:5}} >
      <Navbar />
      <Header />
      <Skills />
      <LangAndTech /> 
      <Projects />
      <ContactMe />
      <SocialMedia />
    </Box>
    </Container>
    </ThemeProvider>
    </div>
  );
}

export default App;
