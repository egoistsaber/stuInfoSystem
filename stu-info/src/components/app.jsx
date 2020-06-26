import React, {Component} from 'react';
import {NavLink, Switch, Route} from 'react-router-dom';
import {Menu, Layout} from 'antd';
import BasicLayout from "../layouts/BasicLayout";
import AntdLayout from "../layouts/AntdLayout";

class App extends Component {
    render() {
        return (
            <AntdLayout/>
        )
    }
}

export default App;
