import React from 'react'

import '../../styles/maincontent/AboutContainer.css'

import { Row, Typography, Col } from 'antd'

const { Paragraph, Title } = Typography;

const AboutContainer = () => {
  return (
    <>
      <Row>
        <Col className='gutter-row' xs={16} sm={14} md={10} lg={4} xl={2} align="left">
          <Title id='title' level={2}>Sobre</Title>
        </Col>

        <Col className='gutter-row' xs={6} sm={10} md={14} lg={18} xl={22} align="left">
          <Title id='gradient' level={1}>___________________________________</Title>
        </Col>
      </Row>

      <Row>
        <Paragraph id='paragraph'>
          Possuo o Curso Técnico Superior Profissional em Desenvolvimento Web e para Dispositivos Móveis.
        </Paragraph>

        <Paragraph id='paragraph'>
          E atualmente aluna da Licenciatura Engenharia Informática na Escola Superior de Tecnologia e Gestão de Felgueiras.
        </Paragraph>
      </Row>
    </>
  )
}

export default AboutContainer