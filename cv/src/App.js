import React from 'react';
import { Typography, Col, Row } from 'antd';

import './styles/Sidebar.css'

import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';


const App = () => {
  const { Title } = Typography;
  
  return (
    <div id="portfolio">
      <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
        <Col className='gutter-row' span={24}>
          <Title className='ant-typography-title' level={1}>Alice Dias</Title>
        </Col>
      </Row>

      <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}} >
        <Col span={6} bordered>
          <Sidebar/>
        </Col>

        <Col bordered span={18}>
          <MainContent />
        </Col>
      </Row>
    </div>
  );
}

export default App;
