import React, {Component} from 'react';
import {NavLink, Switch, Route} from 'react-router-dom';
import {Menu,Layout,Breadcrumb} from 'antd';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import User from "../components/user";
import Course from "../components/course";
import Home from "../components/home";
import './AntdLayout.css'

const {SubMenu} = Menu;
const { Header, Content, Footer, Sider } = Layout;


class AntdLayout extends Component {
    render() {
        return (
           <Layout style={{ minHeight: '100vh' }}>
            <Sider>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <SubMenu
                        key="sub1"
                        title={<span>
                        <MailOutlined/>
                        <span>Students</span>
                    </span>
                        }
                    >
                        <Menu.Item><NavLink to='/user'>User</NavLink></Menu.Item>
                        <Menu.Item><NavLink to='/user'>User2</NavLink></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={<span>
                        <MailOutlined/>
                        <span>Courses</span>
                    </span>}
                    >
                        <Menu.Item><NavLink to='/course'>Course</NavLink></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub3"
                        title={<span>
                        <MailOutlined/>
                        <span>Home</span>
                    </span>}
                    >
                        <Menu.Item><NavLink to='/home'>Home</NavLink></Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
               <Layout className="site-layout">
                   <Header className="site-layout-background" style={{ padding: 0 }} />
                   <Content style={{ margin: '0 16px' }}>
                       <Breadcrumb style={{ margin: '16px 0' }}>
                           <Breadcrumb.Item>User</Breadcrumb.Item>
                           <Breadcrumb.Item>Bill</Breadcrumb.Item>
                       </Breadcrumb>
                       <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                           <Switch>
                               <Route path='/home' component={Home}/>
                               <Route path='/user' component={User}/>
                               <Route path='/course' component={Course}/>
                           </Switch>
                       </div>
                   </Content>
                   <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
               </Layout>
           </Layout>
        );
    }
}

export default AntdLayout;
