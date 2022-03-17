import React,{useState, useEffect} from 'react';
import {Container, Typography, Box} from '@mui/material';
import {getLangsAndTechData} from '../DAL/DAL';
import faIcons from '../static/';
import svgIcons from '../static/svgIcons';
import { ThemeProvider, styled } from '@mui/material/styles';
import portfolioTheme from '../style/portfolioTheme';
import Tooltip, { tooltipClasses } from  '@mui/material/Tooltip';

const TechToolTip = styled(({className, ...props})=>(
  <Tooltip {...props} classes={{popper: className}} arrow/>  
))(({theme})=>({
  [`& .${tooltipClasses.tooltip}`]:{
    backgroundColor: '#2d5f5d',
    color:'#FFF',
    maxWidth: 220,
    fontSize:theme.typography.pxToRem(14),
    border: '1px solid #494b68',
  },
}));


const LangAndTech =()=>{
  const [langTech, setLangTech] = useState([]);

  useEffect( ()=>{
    const langAndTech = async()=>{
      try{
        const langAndTech = await getLangsAndTechData();
        setLangTech(langAndTech);
      }catch(error){console.log(`couldn't fetch Programming languages and Tech, ${error}`)}
    }
    langAndTech();
  },[]);

  const ProgrammingLanguagesAndTech=({id,name, iconFA, usedInProjects})=>{
    return(
      <ThemeProvider theme={portfolioTheme}>
        <TechToolTip title={usedInProjects}>
          <Box sx={{display:'flex',p:{xs:0.5, md:2}, m:0.5,bgcolor: 'secondary.main', width:{xs:150, md:220}}}>
            <Box sx={{p:1, ml:2}}>{faIcons[iconFA]}</Box>
            <Typography sx={{p:1}}>{name}</Typography>
          </Box>
        </TechToolTip>
      </ThemeProvider>
    )
  }

 return(
   <ThemeProvider theme={portfolioTheme}>
  <Container id="tech" maxWidth='xl' sx={{display:'flex',mt:2, mb:{xs:7, md:2}}} className="containersStyle"> 
    <Box sx={{display:'flex', flexDirection: 'column' }}>
      <Box sx={{display:'flex',justifyContent: 'center', m:1, p:2, flexDirection:{xs:'column', md:'row'} }}>      
       <Typography sx={{display:'flex',justifyContent: 'center',fontWeight:'bold', fontSize:{xs:30, md:70}}}> LANGUAGES </Typography>
       <Typography sx={{px:2, display:'flex', alignItems: 'center',justifyContent: 'center', fontSize:{xs:30, md:50}}}> & </Typography>
       <Typography sx={{display:'flex',justifyContent: 'center',fontWeight:'bold', fontSize:{xs:30, md:70}}}> TECHNOLOGIES </Typography>
      </Box>
      <Box sx={{display:'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {langTech.map((ptech, index)=>{
          return(
            <Box key={index} sx={{display:'flex' }}>
              <ProgrammingLanguagesAndTech key={index} id={ptech.id} name={ptech.name} iconFA={ptech.icon} usedInProjects={ptech.usedInProjects}/>
            </Box>
          )
        })}
      </Box>
    </Box>
  </Container>
  </ThemeProvider>
 );
}

export default LangAndTech;