import React, {Component} from 'react';
import {NavLink, Switch, Route} from 'react-router-dom';
import User from "../components/user";
import Course from "../components/course";
import Home from "../components/home";
import {Menu} from "antd";
import {MailOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;

class BasicLayout extends Component {
    render() {
        return (
            <div>
                < div className="row">
                    < div className="col-xs-offset-2 col-xs-8">
                        < div className="page-header">
                            < h2> 学生信息管理系统 </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-1">
                        <Menu
                            onClick={this.handleClick}
                            style={{width: 256}}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
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
                    </div>
                    <div className="col-xs-5 col-xs-offset-1">
                        <Switch>
                            <Route path='/home' component={Home}/>
                            <Route path='/user' component={User}/>
                            <Route path='/course' component={Course}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}
    export default BasicLayout;
