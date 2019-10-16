import "./index.less";
import * as React from "react";
import { renderRoutes } from "react-router-config";
import { NavLink } from 'react-router-dom';
import Nav from "@components/Nav";
import Head from "@components/Head";
import { Layout } from 'antd';

const { lazy, Suspense ,useState, useEffect} = React;
const { Header, Footer, Sider, Content } = Layout;

const Home = (props) => {
  const { route } = props;
  return (
    <Layout className="primary-layout">
      <Header>
        <Head/>
      </Header>
      <Layout>
        <Sider>
          <Nav />
        </Sider>
        <Content>
          { renderRoutes(route.routes) }
        </Content>
      </Layout>
    </Layout>
  );
};
export default Home;
