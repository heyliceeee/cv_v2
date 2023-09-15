import React from 'react'

import '../../styles/maincontent/ExperienceContainer.css'

import { Row, Typography, Col, Card, Image, Divider, Tag, Button } from 'antd'
import { MoreOutlined } from '@ant-design/icons';

const { Paragraph, Title } = Typography;

const ExperienceContainer = () => {
  return (
    <>
      <Row>
        <Col className='gutter-row' xs={20} sm={16} md={12} lg={8} xl={4} align="left">
          <Title id='title' level={2}>Experiência</Title>
        </Col>

        <Col className='gutter-row' xs={4} sm={8} md={12} lg={16} xl={20} align="left">
          <Title id='gradient' level={1}>___________________________________</Title>
        </Col>
      </Row>

      <Row>
        <Col className='gutter-row' span={11} gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Card className='experience'>
              <Row>
                <Col className='gutter-row' span={22} align="left">
                  <Title id='title4' level={4}>Estágio</Title>
                </Col>

                <Col className='gutter-row' span={2} align="right">
                  <Button id="btn" size='small' href='#'><MoreOutlined /></Button>
                </Col>
              </Row>

              <Row>
                <Col className='gutter-row' span={24}>
                  <Title id='title4' level={5}>Assistência Online</Title>                
                </Col>
              </Row>

              <Row>
                <Col className='gutter-row' span={24}>
                  <Paragraph id='paragraph'>Foi realizado uma solução para possibilitar o agendamento do SMS e o envio do SMS automaticamente.</Paragraph>
                </Col>
              </Row>

              <Row>
                <Col className='gutter-row' span={24}>
                  <Paragraph id='paragraph2'>mar 2022 - jul 2022 • 5 meses</Paragraph>
                </Col>
              </Row>

              <Row>
                <Divider />
                <Col id='colTags' className='gutter-row' span={24} align="left">
                  <Tag color="red">C#</Tag>
                  <Tag color="green">ASP .NET Core</Tag>
                  <Tag color="blue">ASP .NET MVC</Tag>
                  <Tag color="purple">Xamarin</Tag>
                </Col>
              </Row>
            </Card>
        </Col>

        <Col className='gutter-row' span={2} gutter={{xs: 8, sm: 16, md: 24, lg: 32}}></Col>

        <Col className='gutter-row' span={11} gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Card className='experience'>
              <Row>
                <Col className='gutter-row' span={22} align="left">
                  <Title id='title4' level={4}>Estágio</Title>
                </Col>

                <Col className='gutter-row' span={2} align="right">
                  <Button id="btn" size='small' href='#'><MoreOutlined /></Button>
                </Col>
              </Row>

              <Row>
                <Col className='gutter-row' span={24}>
                  <Title id='title4' level={5}>ANPRI - Associação Nacional de Professores de Informática</Title>                
                </Col>
              </Row>

              <Row>
                <Col className='gutter-row' span={24}>
                  <Paragraph id='paragraph'>Foi realizado uma app mobile de contactos com funcionalidades de email, chamadas, SMS e integração com o Maps.</Paragraph>
                </Col>
              </Row>

              <Row>
                <Col className='gutter-row' span={24}>
                  <Paragraph id='paragraph2'>abr 2020 - mai 2020 • 2 meses</Paragraph>
                </Col>
              </Row>

              <Row>
                <Divider />
                <Col id='colTags' className='gutter-row' span={24} align="left">
                  <Tag color="red">PhoneGap</Tag>
                  <Tag color="green">JavaScript</Tag>
                  <Tag color="blue">HTML</Tag>
                  <Tag color="purple">CSS</Tag>
                </Col>
              </Row>
            </Card>
        </Col>
      </Row>
    </>
  )
}

export default ExperienceContainer