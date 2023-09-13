import React from 'react'

import '../../styles/sidebar/Information.css';

import { Typography, Col, Row, Button, Divider, Card } from 'antd';
import { PhoneOutlined, MailOutlined, CompassOutlined } from '@ant-design/icons';


const { Text, Paragraph, Title } = Typography;

const Information = () => {
  return (
    <>
        <Card className='information'>
            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}} justify="center">
                <Col className='gutter-row' span={5} align="left">
                    <Button id='phoneInformation' size='large' icon={<PhoneOutlined />}/>
                </Col>

                <Col className='gutter-row' span={19} align="left">
                    <Text id='text'>Telemóvel</Text>
                    <Paragraph id='paragraph' strong>+351 9xx xxx xxx</Paragraph>
                </Col> 
            </Row>

            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}} justify="center">
                <Col className='gutter-row' span={5} align="center">
                    <Button id='mailInformation' size='large' icon={<MailOutlined />}/>
                </Col>    

                <Col className='gutter-row' span={19} align="left">
                    <Text id='text'>E-mail</Text>
                    <Paragraph strong id='paragraph'>alicedias2002@hotmail.com</Paragraph>
                </Col>  
            </Row>

            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}} justify="center">
                <Col className='gutter-row' span={5} align="center">
                    <Button id='pinInformation' size='large' icon={<CompassOutlined />}/>
                </Col>    

                <Col className='gutter-row' span={19} align="left">
                    <Text id='text'>Localização</Text>
                    <Paragraph strong id='paragraph'>Santo Tirso, Porto, Portugal</Paragraph>
                </Col>  
            </Row>
        </Card>
    </>
  )
}

export default Information