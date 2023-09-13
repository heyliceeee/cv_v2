import React from 'react'

import { Space, Button } from 'antd'

import { LinkedinOutlined, GithubOutlined, InstagramOutlined } from '@ant-design/icons';

const socialNetworks = [
    { name: "linkedin", icon: <LinkedinOutlined />, url: "https://www.linkedin.com/in/alice-dias-2108341a4/", color: '#0072b1' },
    { name: "github", icon: <GithubOutlined />, url: "https://github.com/heyliceeee", color: '#111' },
    { name: "instagram", icon: <InstagramOutlined />, url: "", color: '#bc2a8d' },
];

const SocialNetwork = () => {
  return (
    <>
        <Space direction='vertical'>
            <Space wrap>
                {socialNetworks.map((network) => (
                    <Button size='large' style={{backgroundColor: '#1d1d1d', borderColor: '#1d1d1d', color: network.color}} id={network.name} key={network.name} icon={network.icon} href={network.url}/>
                ))}
            </Space>
        </Space>
    </>
  )
}

export default SocialNetwork