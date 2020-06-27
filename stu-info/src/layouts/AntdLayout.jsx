import React, {Component} from 'react';
import {NavLink, Switch, Route} from 'react-router-dom';
import {Menu,Layout,Breadcrumb} from 'antd';
import {MenuFoldOutlined, MailOutlined,  MenuUnfoldOutlined} from '@ant-design/icons';
import StudentList from "../components/StudentList";
import CourseList from "../components/CourseList";
import Home from "../components/home";
import './AntdLayout.css'
import logo from '../logo192.png';
import AddStudent from "../components/AddStudent";

const {SubMenu} = Menu;
const { Header, Content, Footer, Sider } = Layout;


/**
 * 使用了ant design 框架编写的页面
 */
class AntdLayout extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
           <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div style={{textAlign:'center'}}>
                    <img src={logo} style={{width:50}} alt='图片'/>
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <SubMenu
                        key="sub1"
                        title={<span>
                        <MailOutlined/>
                        <span>Students</span>
                    </span>
                        }
                    >
                        <Menu.Item><NavLink to='/students/list'>studentList</NavLink></Menu.Item>
                        <Menu.Item><NavLink to='/students/add'>addStudent</NavLink></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={<span>
                        <MailOutlined/>
                        <span>Courses</span>
                    </span>}
                    >
                        <Menu.Item><NavLink to='/course/list'>CourseList</NavLink></Menu.Item>
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
                   <Header className="site-layout-background" style={{ padding: 0 }} >
                       <div style={{marginLeft:'20px'}}>
                           {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                               className: 'trigger',
                               onClick: this.toggle,
                           })}
                       </div>
                   </Header>
                   <Content style={{ margin: '0 16px' }}>
                       <Breadcrumb style={{ margin: '16px 0' }}>
                           <Breadcrumb.Item>Students</Breadcrumb.Item>
                           <Breadcrumb.Item>list</Breadcrumb.Item>
                       </Breadcrumb>
                       <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                           <Switch>
                               <Route path='/students/list' component={StudentList}/>
                               <Route path='/students/add' component={AddStudent}/>
                               <Route path='/course/list' component={CourseList}/>
                               <Route path='/' component={Home}/>
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
