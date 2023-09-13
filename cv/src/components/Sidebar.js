import React from 'react';

import { Avatar, Col, Row, Button, Card, Divider } from 'antd';

import { DownloadOutlined } from '@ant-design/icons';

import '../styles/sidebar/Information.css';
import '../styles/Sidebar.css';

import PhotoProfile from '../img/profile.jpg';
import SocialNetwork from '../components/sidebar/SocialNetwork';
import Information from '../components/sidebar/Information';

const Sidebar = () => {

  return (
    <Card className='sidebar'>
        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Col className='gutter-row' span={24} align="center">
                <Avatar shape="square" size={{ xs: 124, sm: 132, md: 140, lg: 164, xl: 180, xxl: 200 }} src={PhotoProfile}/>
            </Col>
        </Row>

        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Col id='col10' className='gutter-row' span={24} align="center">
                <Button size='large'>Desenvolvedor</Button>
            </Col>
        </Row>

        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Col id='col5' className='gutter-row' span={24} align="center">
                <SocialNetwork />
            </Col>
        </Row>

        <Divider />

        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Col id='col10' span={24} align="center">
                <Information />
            </Col>
        </Row>

        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Col id='col20' className='gutter-row' span={24} align="center">
                <Button id='btnCV' size='large' icon={<DownloadOutlined />}>Download currículo</Button>
            </Col>
        </Row>
    </Card>
  )
}

export default Sidebar