import React, {Component} from 'react';
import {NavLink,Switch,Route} from 'react-router-dom';
import User from "./user";
import Course from "./course";
import Home from "./home";

class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <h2>学生信息管理系统</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-1">
                        <ul className="nav nav-pills nav-stacked">
                            <li><NavLink to='/home'>Home</NavLink></li>
                            <li><NavLink to='/user'>User</NavLink></li>
                            <li><NavLink to='/course'>Course</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-xs-6">
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

export default App;
