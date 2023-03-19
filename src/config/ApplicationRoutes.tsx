import React from 'react';
import {Layout} from 'antd';
import SideNav from "../components/organisms/sidebar";

const {Header, Sider, Content} = Layout;

const ApplicationRoutes = () => {
    return (
        <Layout>
            <Layout style={{backgroundColor: "white"}}>
                <Header className="siteLayoutBackground" style={{padding: 0, background: "blue"}}>
                </Header>
                <Layout>
                    <Sider width={'55px'} collapsible collapsed={true} theme={"light"}>
                        <SideNav/>
                    </Sider>
                    <Content style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: "calc(100vh - 114px)",
                        background: "white"
                    }}></Content>
                </Layout>
            </Layout>

        </Layout>
    );
}

export default ApplicationRoutes;
