import React, { useState } from 'react';
import { Layout, Menu, Button, Typography, Flex } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    AppstoreFilled,
    ProfileFilled,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import useScreenSize from '../hooks/useScreen';
import { getCurrentTitle, getDefaultKeySider } from '../utils/common';
import logo1 from "../../assets/images/logo2.png"
import AppRoutes from './AppRoutes';
import { PATH_DASHBOARD } from '../constants/pathContstants';
import "./AppLayout.scss"

const { Title } = Typography;
const { Header, Sider, Content } = Layout;



const AppLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(true);
    const { isMobile } = useScreenSize()
    const location = useLocation();
    const items = [
        {
            key: 1,
            icon: <AppstoreFilled />,
            label: 'Dashboard',
            path: '/',
        },
        {
            key: 2,
            icon: <ProfileFilled />,
            label: 'Tasks',
            path: '/tasks',
        }
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>

            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                trigger={null}
                collapsed={isMobile ? collapsed : !collapsed}
                theme='light'
                className='sider-bg'
            >
                <div className="demo-logo-vertical" />
                <Menu className='sider-bg' theme="light" mode="inline" defaultSelectedKeys={[getDefaultKeySider(items, location.pathname).toString()]} >
                    <div className='sider-spacing'><Menu.Item disabled style={{ padding: "0 5px" }}><Link to={PATH_DASHBOARD}><img src={logo1} alt='logo' width={180} /></Link> </Menu.Item> </div>
                    {items.map((item) => (
                        <Menu.Item key={item.key} icon={item.icon} onClick={() => { isMobile && setCollapsed(!collapsed) }}>
                            <Link to={item.path}>{item.label}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>


            <Layout className="site-layout">
                <Header style={{ padding: 0, background: "#ffff" }}>
                    <Flex align='center' justify='start' >
                        {isMobile && (
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64,
                                }}
                            />
                        )}
                        {collapsed ? <Title level={isMobile ? 4 : 3} style={{ margin: !isMobile ? "15px" : 0, height: "100" }} >{getCurrentTitle(location.pathname, items)}</Title> : null}
                    </Flex>
                </Header>

                <Content
                    className="site-layout-background"
                    style={{
                        margin: '6px 6px',
                        padding: 24,
                        minHeight: 280,
                        background: '#fff',
                        // overflowY: "scroll",
                        // scrollbarWidth: "none"
                    }}
                >
                    <AppRoutes />
                </Content>


            </Layout>
        </Layout>
    );
};

export default AppLayout;
