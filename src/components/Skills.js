import React,{useState, useEffect} from 'react';
import {Container, Typography, Box} from '@mui/material';
import {getSkillsData} from '../DAL/DAL';
import { ThemeProvider } from '@mui/material/styles';
import portfolioTheme from '../style/portfolioTheme';
import '../style/customStyle.css';

const Skill =()=>{
  const [skills, setSkills] = useState([]);

  useEffect(()=>{
    const getSkills = async()=>{
      try{
        const skilldata = await getSkillsData();
        setSkills(skilldata);
      }catch(error){console.log(`could not fetch skills data, ${error}`)}
    }
    getSkills();
  },[]);

  const Skill = ({id, name})=>{
    return(
      <ThemeProvider theme={portfolioTheme}>
      <Box key={id} sx={{display:'flex',p:{xs:0.5, md:2},mb:6, m:0.5,bgcolor: 'cube', width:{xs:150, md:220}}}>    
        <Typography sx={{p:0.5, textAlign:'center',  mx:'auto', fontSize:{xs:'16px', md:'25px'}}}>{name}</Typography>
      </Box>
      </ThemeProvider>
    );
  }

  return(
    <ThemeProvider theme={portfolioTheme}>
    <Container id="skills" maxWidth='xl' sx={{display:'flex', my:2, justifyContent: 'center'}} className="containersStyle" >
    <Box sx={{display:'flex', flexDirection: 'column',justifyContent: 'center' }}>
      <Box sx={{display:'flex',justifyContent: 'center', m:1, p:2, flexDirection:{xs:'column', md:'row'} }}>
        <Typography sx={{display:'flex',justifyContent: 'center',fontWeight:'bold', fontSize:{xs:30, md:70}}}> SKILLS </Typography>      
      </Box>
      <Box sx={{display:'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {skills.map((skill,index)=>{
          return(
            <Skill key={index} id={skill.id} name={skill.name}/>
          );
        })}
      </Box>
    </Box>
    </Container>
    </ThemeProvider>
  );
}

export default Skill;