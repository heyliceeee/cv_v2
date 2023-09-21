import React from 'react'

import '../../styles/maincontent/ProjectsContainer.css'

import { Row, Typography, Col, Card, Divider, Tag, Button } from 'antd'
import { MoreOutlined } from '@ant-design/icons';

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
      
      <Row>
        <Col className='gutter-row' span={11} gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
          <Card className='projects'>
            <Row>
              <Col className='gutter-row' span={22} align="left">
                <Title id='title4' level={4}>Pontos de Interesse por GPS</Title>
              </Col>

              <Col className='gutter-row' span={2} align="right">
                <Button id="btn" size='small' href='#'><MoreOutlined /></Button>
              </Col>
            </Row>

              <Row>
                <Col className='gutter-row' span={24}>
                  <Paragraph id='paragraph2'>API</Paragraph>
                </Col>
              </Row>

              <Row>
                <Divider />
                <Col id='colTags' className='gutter-row' span={24} align="left">
                  <Tag color="red">Java</Tag>
                  <Tag color="orange">Spring boot</Tag>
                  <Tag color="yellow">MongoDB</Tag>
                </Col>
              </Row>
          </Card>
        </Col>

        <Col className='gutter-row' span={2} gutter={{xs: 8, sm: 16, md: 24, lg: 32}}></Col>

        <Col className='gutter-row' span={11} gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
          <Card className='projects'>
            <Row>
              <Col className='gutter-row' span={22} align="left">
                <Title id='title4' level={4}>Website de Filmes</Title>
              </Col>

              <Col className='gutter-row' span={2} align="right">
                <Button id="btn" size='small' href='#'><MoreOutlined /></Button>
              </Col>
            </Row>

              <Row>
                <Col className='gutter-row' span={24}>
                  <Paragraph id='paragraph2'>Frontend</Paragraph>
                </Col>
              </Row>

              <Row>
                <Divider />
                <Col id='colTags' className='gutter-row' span={24} align="left">
                  <Tag color="red">Java</Tag>
                  <Tag color="orange">API</Tag>
                  <Tag color="yellow">JSON Parsing</Tag>
                  <Tag color="green">HTML</Tag>
                  <Tag color="blue">Bootstrap</Tag>
                </Col>
              </Row>
          </Card>
        </Col>
      </Row>

      <br />

      <Row>
        <Col className='gutter-row' span={11} gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
          <Card className='projects'>
            <Row>
              <Col className='gutter-row' span={22} align="left">
                <Title id='title4' level={4}>Website de custos dos projetos</Title>
              </Col>

              <Col className='gutter-row' span={2} align="right">
                <Button id="btn" size='small' href='#'><MoreOutlined /></Button>
              </Col>
            </Row>

              <Row>
                <Col className='gutter-row' span={24}>
                  <Paragraph id='paragraph2'>Fullstack</Paragraph>
                </Col>
              </Row>

              <Row>
                <Divider />
                <Col id='colTags' className='gutter-row' span={24} align="left">
                  <Tag color="red">JavaScript</Tag>
                  <Tag color="orange">React</Tag>
                  <Tag color="yellow">API</Tag>
                  <Tag color="green">HTML</Tag>
                  <Tag color="blue">CSS</Tag>
                </Col>
              </Row>
          </Card>
        </Col>

        <Col className='gutter-row' span={2} gutter={{xs: 8, sm: 16, md: 24, lg: 32}}></Col>

        <Col className='gutter-row' span={11} gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
          <Card className='projects'>
            <Row>
              <Col className='gutter-row' span={22} align="left">
                <Title id='title4' level={4}>Traz Cá</Title>
              </Col>

              <Col className='gutter-row' span={2} align="right">
                <Button id="btn" size='small' href='#'><MoreOutlined /></Button>
              </Col>
            </Row>

              <Row>
                <Col className='gutter-row' span={24}>
                  <Paragraph id='paragraph2'>API</Paragraph>
                </Col>
              </Row>

              <Row>
                <Divider />
                <Col id='colTags' className='gutter-row' span={24} align="left">
                  <Tag color="red">C#</Tag>
                  <Tag color="orange">ASP .NET Core</Tag>
                  <Tag color="yellow">SQL Server</Tag>
                  <Tag color="green">MVC</Tag>
                  <Tag color="blue">JSON</Tag>
                </Col>
              </Row>
          </Card>
        </Col>
      </Row>

      <br />
    </>
  )
}

export default ProjectsContainer