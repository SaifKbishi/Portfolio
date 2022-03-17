import axios from 'axios';

const getSocialMediaData =async ()=>{
  const sm = await axios.get('../data/socialMedia.json');
  return sm.data.socialmedia;  
}
const getSkillsData =async ()=>{
  const skills = await axios.get('../data/skills.json');
  return skills.data.skills;  
}
const getLangsAndTechData = async()=>{
  const tech = await axios.get('../data/technologies.json');
  return tech.data.tech;
}
const getProjectsData = async()=>{
  const projects = await axios.get('../data/projects.json');
  return projects.data.projects;
}
const getAboutMeData = async()=>{
  const about = await axios.get('../data/aboutMe.json');
  return about.data.aboutMe;
}
const getPagesData = async()=>{
  const pages = await axios.get('/data/pages.json');
  return pages.data.pages;
}

export{
  getSocialMediaData,
  getSkillsData,
  getLangsAndTechData,
  getProjectsData,
  getAboutMeData,
  getPagesData
}