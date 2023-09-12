import React from 'react'

import { Space, Button } from 'antd'

import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';

const socialNetworks = [
    { name: "linkedin", icon: <LinkedinOutlined />, url: "https://www.linkedin.com/in/alice-dias-2108341a4/" },
    { name: "github", icon: <GithubOutlined />, url: "https://github.com/heyliceeee" },
    // { name: "instagram", icon: <FaInstagram />, url: "" },
];

const SocialNetwork = () => {
  return (
    <>
        <Space direction='vertical'>
            <Space wrap>
                {socialNetworks.map((network) => (
                    <Button size='large' id={network.name} key={network.name} icon={network.icon} href={network.url}/>
                ))}
            </Space>
        </Space>
    </>
  )
}

export default SocialNetwork