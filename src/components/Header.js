import React,{useState, useEffect} from 'react';
import {Container, Typography, Box,Button,Tooltip} from '@mui/material';
import {getAboutMeData} from '../DAL/DAL';
import { ThemeProvider } from '@mui/material/styles';
import portfolioTheme from '../style/portfolioTheme';
import '../style/customStyle.css';
import myPhoto from '../static/protfolio.jpg';
const Header =()=>{
  const [aboutMe, setAboutMe] = useState();
  const [clamped, setClamped] = useState(true);
  const [showButton, setShowButton] = useState(true);


  useEffect(()=>{
    const getAboutMe = async ()=>{
      try{
        const aboutMeData = await getAboutMeData();
        setAboutMe(aboutMeData[0]);
      }catch(error){
        console.log(`Could not fetch About Me details, Error:${error}`)
      }
    }
    getAboutMe();
  },[]);

  const handleReadMore = ()=>{
    setClamped(!clamped);
  }

  const DisplayAboutMe=({aboutGreetings,aboutRoles,aboutDescription})=>{
    return(
      <Box>
        <Typography sx={{fontSize:{xs:25, md:30}, fontWeight:'bold', p:1, mb:1}}>
          {aboutGreetings}
        </Typography>
        <Box sx={{display:'flex'}}>
          <Typography  sx={{fontSize:{xs:20, md:22}, p:1}}  className={'breakLines fulltext ' + (clamped ? 'aboutMeDescription' : '')}>
            {aboutDescription}
          </Typography>
          {clamped && 
            <Box id="myPhoto" width={'80%'} sx={{display:{xs:'none', md:'flex'}}}>
              <Tooltip title="Saif Kbishi traveling in Italy">
              <img alt="Saif " src={myPhoto}  width={'100%'} />
              </Tooltip>
            </Box>}
        </Box>
        <Box sx={{mt:{xs:3, md:0}}}>
          {showButton && (<Button variant="contained" size="large" onClick={()=>handleReadMore()}>Read {clamped ? "more" : "less"}</Button>        )}
        </Box>
      </Box>
    );
  }

 return(
  <ThemeProvider theme={portfolioTheme}>
    <Container id="header" maxWidth='xl' sx={{my:2, pt:3}}> 
      <Box sx={{display:'flex',justifyContent: 'center', m:1, p:2,mt:5, flexDirection:{xs:'column', md:'column'}, bgcolor: 'secondary.light' }} >
       <Typography sx={{display:'flex',justifyContent: 'center',fontWeight:'bold', fontSize:{xs:50, md:120}}}> Full-stack </Typography>
       <Typography variant="h3" sx={{px:2, display:'flex', alignItems: 'center',justifyContent: 'center', fontSize:{xs:30, md:50}}}>Web & Mobile</Typography>
       <Typography sx={{display:'flex',justifyContent: 'center',fontWeight:'bold', fontSize:{xs:50, md:120}}} style={{textAlign:'center'}}> MERN developer </Typography>
      </Box>
      <Box >     
        {aboutMe &&  <DisplayAboutMe aboutGreetings={aboutMe.myName} aboutRoles={aboutMe.roleImLookingFor} aboutDescription={aboutMe.description}/>}
      </Box>
    </Container>
    </ThemeProvider>
 );
}

export default Header;
