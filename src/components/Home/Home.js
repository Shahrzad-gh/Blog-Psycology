import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { AppstoreOutlined, HomeOutlined } from "@ant-design/icons";
import "./Home.css";
import "antd/dist/antd.css";
import BlogList from "./Blog/BlogList";

const { SubMenu } = Menu;

function Home() {
  const { Header, Footer, Sider, Content } = Layout;

  const [activeMenu, setActiveMenu] = useState({ current: "mail" });

  const handleClick = (e) => {
    setActiveMenu({ current: e.target.key });
  };
  return (
    <Layout>
      <Header>
        <Menu
          onClick={handleClick}
          selectedKeys={[activeMenu]}
          mode="horizontal"
        >
          <Menu.Item key="mail" icon={<HomeOutlined />}>
            خانه
          </Menu.Item>
          <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
            پادکست
          </Menu.Item>
          <SubMenu key="SubMenu" title="مقاله">
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              وبلاگ
            </a>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Content style={{ padding: "0 50px" }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>خانه</Breadcrumb.Item>
            <Breadcrumb.Item>لیست</Breadcrumb.Item>
            <Breadcrumb.Item>برنامه</Breadcrumb.Item>
          </Breadcrumb> */}
          <div className="site-layout-content">
            <BlogList />
          </div>
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  );
}

export default Home;