import React from 'react'

import '../../styles/maincontent/AboutContainer.css'

import { Row, Typography, Col } from 'antd'

const { Paragraph, Title } = Typography;

const ProjectsContainer = () => {
  return (
    <>
      <Row>
        <Col className='gutter-row' xs={19} sm={15} md={11} lg={7} xl={3} align="left">
          <Title id='title' level={2}>Projetos</Title>
        </Col>

        <Col className='gutter-row' xs={5} sm={9} md={13} lg={17} xl={21} align="left">
          <Title id='gradient' level={1}>___________________________________</Title>
        </Col>
      </Row>
    </>
  )
}

export default ProjectsContainer