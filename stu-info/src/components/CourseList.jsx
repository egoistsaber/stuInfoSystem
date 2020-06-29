import React, {Component} from 'react';
import axios from "axios";
import {NavLink} from "react-router-dom";
import { Button } from 'antd';
import TableList from "./TableList";

class CourseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseList: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/courses')
            .then((response) => this.setState({courseList: response.data}));
    }

    render() {
        const {courseList}=this.state;

        const config={list:courseList,link:'/courses/newCourse',thead:['Id','名字','教师名字','课时'],
            propsConfig:['id','name','teacherName','duration']};
        return (
            <div>
                <TableList {...config}/>
            </div>
        );
    }
}

export default CourseList;
