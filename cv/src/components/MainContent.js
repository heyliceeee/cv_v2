import React from 'react';

import '../styles/MainContent.css'

import { Card} from 'antd';

import AboutContainer from './maincontent/AboutContainer'
import ExperienceContainer from './maincontent/ExperienceContainer'
import EducationContainer from './maincontent/EducationContainer'
import ProjectsContainer from './maincontent/ProjectsContainer'

const MainContent = () => {

  return (
    <Card className="maincontent">
        <AboutContainer />
        <ExperienceContainer />
        <EducationContainer />
        <ProjectsContainer />
    </Card>
  )
}

export default MainContent