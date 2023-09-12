import React from 'react';
import { Typography, Col, Row } from 'antd';

import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';


const App = () => {
  const { Title } = Typography;
  
  return (
    <div id="portfolio" style={{margin: '40px'}}>
      <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
        <Col className='gutter-row' span={24} style={{border: '1px solid #000' }}>
          <Title>Alice Dias</Title>
        </Col>
      </Row>

      <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
        <Col className='gutter-row' span={6} style={{ border: '1px solid #000' }}>
          <Sidebar />
        </Col>

        <Col className='gutter-row' span={18} style={{ border: '1px solid #000' }}>
          <MainContent />
        </Col>
      </Row>
    </div>
  );
}

export default App;
