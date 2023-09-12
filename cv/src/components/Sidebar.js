import React from 'react';

import { Avatar, Col, Row, Button } from 'antd';

import PhotoProfile from '../img/profile.jpg';
import SocialNetwork from '../components/sidebar/SocialNetwork';
import Information from '../components/sidebar/Information';

const Sidebar = () => {

  return (
    <div id='sidebar' style={{backgroundColor: '#'}}>
        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Col className='gutter-row' span={24} align="center">
                <Avatar shape="square" size={{ xs: 124, sm: 132, md: 140, lg: 164, xl: 180, xxl: 200 }} src={PhotoProfile}/>
            </Col>
        </Row>

        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Col className='gutter-row' span={24} align="center" style={{border: '5px solid #FFF' }}>
                <Button size='large'>Desenvolvedor</Button>
            </Col>
        </Row>

        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Col className='gutter-row' span={24} align="center" style={{border: '5px solid #FFF' }}>
                <SocialNetwork />
            </Col>
        </Row>

        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Col className='gutter-row' span={24} align="center">
                <Information />
            </Col>
        </Row>
    </div>
  )
}

export default Sidebar