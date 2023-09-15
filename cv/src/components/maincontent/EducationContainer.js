import React from 'react'

import '../../styles/maincontent/EducationContainer.css'

import { Row, Typography, Col, Card, Divider, Tag, Button  } from 'antd'
import { MoreOutlined } from '@ant-design/icons';

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
      <Col className='gutter-row' span={11} gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Card className='education'>
              <Row>
                <Col className='gutter-row' span={22} align="left">
                  <Title id='title4' level={4}>Licenciatura Engenharia Informática</Title>
                </Col>

                <Col className='gutter-row' span={2} align="right">
                  <Button id="btn" size='small' href='#'><MoreOutlined /></Button>
                </Col>
              </Row>

              <Row>
                <Col className='gutter-row' span={24}>
                  <Title id='title4' level={5}>ESTG - Politécnico do Porto</Title>                
                </Col>
              </Row>

              <Row>
                <Col className='gutter-row' span={24}>
                  <Paragraph id='paragraph2'>set 2022 - atual</Paragraph>
                </Col>
              </Row>

              <Row>
                <Divider />
                <Col id='colTags' className='gutter-row' span={24} align="left">
                  <Tag color="red">C</Tag>
                  <Tag color="orange">Gitlab</Tag>
                  <Tag color="yellow">Estrutura de Dados</Tag>
                  <Tag color="green">Java</Tag>
                </Col>
              </Row>
            </Card>
        </Col>

        <Col className='gutter-row' span={2} gutter={{xs: 8, sm: 16, md: 24, lg: 32}}></Col>

        <Col className='gutter-row' span={11} gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Card className='education'>
              <Row>
                <Col className='gutter-row' span={22} align="left">
                  <Title id='title4' level={4}>CTESP Desenvolvimento Web e Dispositivos Móveis</Title>
                </Col>

                <Col className='gutter-row' span={2} align="right">
                  <Button id="btn" size='small' href='#'><MoreOutlined /></Button>
                </Col>
              </Row>

              <Row>
                <Col className='gutter-row' span={24}>
                  <Title id='title4' level={5}>ESTG - Politécnico do Porto</Title>                
                </Col>
              </Row>

              <Row>
                <Col className='gutter-row' span={24}>
                  <Paragraph id='paragraph2'>out 2020 - jul 2022</Paragraph>
                </Col>
              </Row>

              <Row>
                <Divider />
                <Col id='colTags' className='gutter-row' span={24} align="left">
                  <Tag color="red">JavaScript</Tag>
                  <Tag color="orange">Swift</Tag>
                  <Tag color="yellow">Ionic</Tag>
                  <Tag color="green">Java</Tag>
                  <Tag color="blue">React</Tag>
                  <Tag color="purple">PHP</Tag>
                  <Tag color="magenta">Angular</Tag>
                </Col>
              </Row>
            </Card>
         </Col>
      </Row>

      <br/>
    </>
  )
}

export default EducationContainer