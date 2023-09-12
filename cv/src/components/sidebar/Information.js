import React from 'react'

import { Typography, Col, Row, Button } from 'antd';
import { PhoneOutlined, MailOutlined, CompassOutlined } from '@ant-design/icons';


const { Text, Paragraph } = Typography;

const Information = () => {
  return (
    <>
        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}} justify="center">
            <Col className='gutter-row' span={5} align="center">
                <Button size='large' icon={<PhoneOutlined />}/>
            </Col>    

            <Col className='gutter-row' span={19} align="left">
                <Text>Telemóvel</Text>
                <Paragraph strong>+351 9xx xxx xxx</Paragraph>
            </Col>  
        </Row>

        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}} justify="center">
            <Col className='gutter-row' span={5} align="center">
                <Button size='large' icon={<MailOutlined />}/>
            </Col>    

            <Col className='gutter-row' span={19} align="left">
                <Text>E-mail</Text>
                <Paragraph strong>alicedias2002@hotmail.com</Paragraph>
            </Col>  
        </Row>

        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}} justify="center">
            <Col className='gutter-row' span={5} align="center">
                <Button size='large' icon={<CompassOutlined />}/>
            </Col>    

            <Col className='gutter-row' span={19} align="left">
                <Text>Localização</Text>
                <Paragraph strong>Santo Tirso, Porto, Portugal</Paragraph>
            </Col>  
        </Row>
    </>
  )
}

export default Information