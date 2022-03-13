import React,{useState, useEffect} from 'react';
import {Container, Typography, Box,Link} from '@mui/material';
import {getSocialMediaData} from '../DAL/DAL';
import faIcons from '../static/';
import { ThemeProvider } from '@mui/material/styles';
import portfolioTheme from '../style/portfolioTheme';
import '../style/customStyle.css';

const SocialMedia =()=>{
  const [socialMedia, setSocialMedia] = useState([]);
  // console.log('faIcons', faIcons)
  // console.log('faIcons', faIcons[gitHub])

  useEffect(()=>{
    const getSocialMedia = async ()=>{
      try{
        const socialMediaData = await getSocialMediaData();
        setSocialMedia(socialMediaData);
      }catch(error){
        console.log(`Couldn't fetch Social Media data, ${error} `);
      }
    }//getSocialMedia
    
    getSocialMedia();
  },[]);

  const DisplaySocialMediaLink=({smId, smName, smLink, smIcon,smIconColor})=>{
    // console.log('29',smIcon)
    return(
      <ThemeProvider theme={portfolioTheme}>
      <Link  href={smLink} underline="none" target="_blank" rel="noopener" sx={{color:'#FFF'}}>        
        <Box className="cloudsAround" key ={smId} sx={{display:'flex', alignItems: 'center', justifyContent: 'center', 
              p:{xs:0.5, md:2}, m:0.5,bgcolor: 'cubeBG', 
              width:{xs:100, md:200}, 
              height:{xs:50 , md:70},}}>         
          <Box sx={{px:1, fontSize:{xs:'10px'}}} >{faIcons[smIcon]}</Box>
          <Typography key={smId} sx={{fontSize:{xs:'15px', md:'30px'}}}>{smName}</Typography>          
        </Box>
      </Link>
      </ThemeProvider >
    );
  }

  return(
    <ThemeProvider theme={portfolioTheme}>
  <Container id="socialMedia" maxWidth='xl' sx={{display:'flex', mb:3, mt:{xs:2, md:10}, justifyContent: 'center', alignItems: 'center', bgcolor:'cube'}} className="socialMedia">
    <Box sx={{m:1, justifyContent:'center', display:'flex', flexWrap:'wrap'}}>      
    {
      socialMedia.map((sm, index)=>{
        return(
          <Box key={index} >
            <DisplaySocialMediaLink smId={sm.id} smName={sm.name} smLink={sm.link} smIcon={sm.icon} smIconColor={sm.iconColor} />
          </Box>
        )
      })
    }
    </Box>
  </Container>
  </ThemeProvider>
  );
}

export default SocialMedia;