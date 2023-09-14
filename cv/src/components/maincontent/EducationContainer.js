import React from 'react'

import '../../styles/maincontent/AboutContainer.css'

import { Row, Typography, Col } from 'antd'

const { Paragraph, Title } = Typography;


const EducationContainer = () => {
  return (
    <>
    <Row>
        <Col className='gutter-row' xs={22} sm={18} md={14} lg={10} xl={6} align="left">
          <Title id='title' level={2}>Formação Académica</Title>
        </Col>

        <Col className='gutter-row' xs={2} sm={6} md={10} lg={14} xl={18} align="left">
          <Title id='gradient' level={1}>___________________________________</Title>
        </Col>
      </Row>

      <Row>

      </Row>
    </>
  )
}

export default EducationContainer