import React,{useState, useEffect}  from 'react';
import {AppBar, Container, Toolbar, Typography, Box,IconButton,MenuItem, Menu,Tooltip } from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import portfolioTheme from '../style/portfolioTheme';
import {getPagesData} from '../DAL/DAL';

const Navbar =()=>{
  const [pages, setPages] = useState([]);
  const [navbarElement, setNavbarElement] = useState(null);

  useEffect(()=>{
    const getPages = async ()=>{
      try{
        const pagesData = await getPagesData();
        setPages(pagesData);
      }catch(error){
        console.log(`Could not fetch pages, ${error}`);
        }
    }
    getPages();
  },[]);

  const handleOpenMobileNavMenu =(e)=>{
    setNavbarElement(e.currentTarget);
  }
  const handleCloseMobileNavMenu =(e)=>{
    setNavbarElement(null);
  }
  const scrollToSectionAndCloseMenu = async (page)=>{
    await setNavbarElement(null);
    document.getElementById(String(page)).scrollIntoView({ behavior: 'smooth'});
  }

 return(
  <ThemeProvider theme={portfolioTheme}>
  <AppBar > 
    <Container maxWidth='xl'>
      <Toolbar disableGutters>
        <Box sx={{flexGrow:1, display:{xs:'flex', md:'none'}}} >
          <IconButton size='large' onClick={handleOpenMobileNavMenu} sx={{ color:'#FFF'}}>
            <MenuIcon/>
          </IconButton>
          <Menu id='navbar-Menu' 
            anchorEl={navbarElement}
            transformOrigin={{vertical: 'bottom', horizontal: 'left'}} 
            open={Boolean(navbarElement)}
            onClose={handleCloseMobileNavMenu}
            sx={{ display:{xs:'block', md:'none'}}}
            
            >
            {pages.map((page)=>(              
              <MenuItem key={page.id} 
                onClick={()=>{
                  let pLink = `${page.link}`; 
                  scrollToSectionAndCloseMenu(pLink)}
                } 
                sx={{ bgcolor:'cube', my:0.3}}>                
                <Typography textAlign="center" sx={{ color:'textColor'}} ariaLabel={page.aria_label}> {page.name} </Typography>
              </MenuItem >
            ))}
          </Menu>
        </Box>

        <Box sx={{display:{xs:'flex', md: 'flex'}, width:{xs:100, md:150}}} 
            onClick={()=>{document.getElementById(`header`).scrollIntoView({ behavior: 'smooth', block:'start', inline: "nearest" })}}
            aria-label="SK logo"
            role="banner"
        >
          <Tooltip title="Saif portfolio" arrow>
          <img alt="SK logo" src={'https://quirky-montalcini-c9d232.netlify.app/images/logo.png'} width={'100%'}/>
          </Tooltip >
        </Box>        
        <Box sx={{justifyContent: 'flex-end',flexGrow:1, display:{xs:'none', md:'flex'}}} role="navigation">
          {pages.map((page, index)=>(
            <MenuItem key={page.id} id={page.id}
              onClick={()=>{document.getElementById(`${page.link}`).scrollIntoView({ behavior: 'smooth', block:'start', inline: "start" })              }}> 
              <Typography textAlign="center"> {page.name} </Typography>
            </MenuItem >
          ))}  
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  </ThemeProvider>
 );
}

export default Navbar;
