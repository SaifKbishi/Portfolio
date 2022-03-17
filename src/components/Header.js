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
          {clamped && <Box id="myPhoto" width={'80%'} >
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
        {/* <Typography sx={{fontSize:{xs:25, md:30}, fontWeight:'bold', p:1, mb:1}}>
          My name is Saif, <br/>
        </Typography>
        <Typography sx={{fontSize:{xs:20, md:22}, p:1}}>
          I always thought that working in a place close to my home with a decent salary is a great achievement. <br/>
          That was my comfort zone.<br/>
          But, something inside of me always said that I can do more.<br/>
          I spent 7 years as technical support, with the coding fire burning inside of me, wondering how am I gonna do it?! 
          how can I go back to coding and software development?! with no experience.<br/><br/>

          And then it happened, I saw a commercial of a young software engineer lady who worked in marketing 
          for 9 years and got back on track after finishing Fullstack Bootcamp.<br/>
          That was the "eureka " for me, if she can do it I can do too. <br/>
          so, I decided to press into a new beginning, I finished the Bootcamp and started creating frontend & full-stack apps of my own. <br/>
          And I love it, I love applying responsive design principles and see my application shrink into mobile screens and still look wonderful.<br/>
          I love it every time I send an API call with Postman and see the response below.<br/>
          I love it when I write some kind of a join from different API's and see the items populated on the screen.<br/>
          I love it every time I write a filter function and it works, I love it.<br/><br/>

          I know the (career) mountain is high, I'm willing to climb it.<br/>
          My specialties include fast learning new skills and programming languages, problem-solving, responsive design principles, 
          clean code writing, and good communication skills.<br/>
          So far, I have JavaScript, MongoDB, ExpressJS, NodeJS, React, SQL, HTML5, CSS3, jQuery, Material-UI, Redux, Bootstrap, 
          Sass, React native, JIRA, Salesforce, Heroku, and Git/Github in my backpack.<br/><br/>

          I have started learning more about AWS and Typescript.<br/>
          I'm still enthusiastic about exploring new programming languages, frameworks, or any coding principle to integrate it into my projects.<br/>
        </Typography> */}
        {aboutMe &&  <DisplayAboutMe aboutGreetings={aboutMe.myName} aboutRoles={aboutMe.roleImLookingFor} aboutDescription={aboutMe.description}/>}
      </Box>
    </Container>
    </ThemeProvider>
 );
}

export default Header;
