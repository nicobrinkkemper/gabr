import React, { useState } from 'react'
import styles from './index.css';
import { Drawer, Layout, Menu, Breadcrumb } from 'antd';

const {
  Header, Footer, Sider, Content,
} = Layout;

function BasicLayout(props) {
  let [visible, setVisible] = useState(false)
  let placement = 'left';
  return (
    <div className={styles.normal}>
      <Layout className="layout">
        <Header>
          <div className={styles.logo} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >

            <Menu.Item key="1">Create</Menu.Item>
            <Menu.Item key="2">Browse</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', margin: '50px 0' }}>
            {props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Gabr ©2018 Created by N.Brinkkemper
    </Footer>
      </Layout>

      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer></div>
  );
}

export default BasicLayout;
