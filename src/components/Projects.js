import React, {useEffect,useState}  from 'react';
import axios from 'axios';
import {getProjectsData} from '../DAL/DAL';
import {Container, Typography, Box, Link} from '@mui/material';
import Tooltip, { tooltipClasses } from  '@mui/material/Tooltip';
import { ThemeProvider, styled  } from '@mui/material/styles';
import portfolioTheme from '../style/portfolioTheme';

const ProjectsToolTip = styled(({className, ...props})=>(
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

const Projects =()=>{
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    const source=axios.CancelToken.source();
    const getProjects = async ()=>{
      try{
        const projectsData = await getProjectsData(source);
        setProjects(projectsData);
      }catch(error){
        if(axios.isCancel(error)){
          console.log('Caught cancel axios', error);
        }else{
          console.log(`There was an error: , ${error}`);
        }        
      }
    }

    getProjects();
  },[]);

  const Project = ({id, name, link, description})=>{
    // console.log('link: ',link)
    return(
      <ThemeProvider theme={portfolioTheme}>
      <Link underline='none' href={link} target="_blank" rel="noopener"  sx={{color:'#FFF', fontSize:{xs:'20px', md:'30px'}}}>
        <Box sx={{display:'flex',p:{xs:0.5, md:2}, m:0.5, bgcolor: 'secondary.light', width:{xs:170, md:250}, height:{xs:70 , md:70}}}>
          <ProjectsToolTip title={description} >
          <Typography color="textColor" sx={{p:0.5, textAlign:'center',  mx:'auto', my:'auto', fontSize:{xs:'16px', md:'25px'}}}>
            {name}
          </Typography>        
          </ProjectsToolTip>
        </Box>
      </Link>
      </ThemeProvider >
    )
  }

  return(
    <ThemeProvider theme={portfolioTheme}>
    <Container id="projects" maxWidth='xl' sx={{display:'flex', my:2, justifyContent: 'center'}} className="containersStyle">
    <Box sx={{display:'flex',justifyContent: 'center', flexDirection: 'column' }}>
      <Box sx={{ m:1, p:2 }}>
        <Typography sx={{textAlign:'center', fontWeight:'bold', fontSize:{xs:30, md:70}}}> PROJECTS </Typography>      
      </Box>
      <Box sx={{display:'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {projects.map((project, index)=>{
          return(
            <Box key={index} sx={{display:'flex' }}>
              <Project key={index} id={project.id} name={project.name} link={project.link} description={project.description}/>
            </Box>
          )
        })}
      </Box>
    </Box>
    </Container>
    </ThemeProvider>
  );
}

export default Projects;

