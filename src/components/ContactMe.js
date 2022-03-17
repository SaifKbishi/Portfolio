import React from 'react';
import {Container, Typography, Box, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';

import portfolioTheme from '../style/portfolioTheme';

const ContactMe =()=>{

 return(
   <ThemeProvider theme={portfolioTheme}>
   <Container id="contactMe" maxWidth='xl' sx={{display:'flex', my:2, justifyContent: 'center', flexDirection:'column'}} className="containersStyle"> 
    <Box>
      <Typography sx={{textAlign:'center', fontWeight:'bold', fontSize:{xs:30, md:70}}}>Contact Me</Typography>
    </Box>
      <Box sx={{display:'flex',alignItems: 'center', justifyContent:{xs:'space-around',md:'space-around'},flexDirection:{xs:'column', md:'row'}, mt:{xs:1, md:3}}}> 
        <Button sx={{my:2}} href="https://drive.google.com/file/d/1EibkOJG0RyEX_k9NRFTSHR3-BmL2qLzq/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer" 
          variant="contained"
          size="large" >Download my CV </Button>
        <Button href="mailto:saifkbishi@gmail.com" variant="contained" size="large" endIcon={<SendIcon/>} >send me an e-mail</Button>        
      </Box>
   </Container>
  </ThemeProvider>
 );
}

export default ContactMe;

