import React, {Component} from 'react';
import axios from "axios";
import {Modal} from "antd";
import {ExclamationCircleOutlined} from '@ant-design/icons';
import TableList from "./TableList";

class CourseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseList: []
        };
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8080/courses')
            .then((response) => this.setState({courseList: response.data}));
    }

    onDelete(itemId, index) {
        const url = 'http://localhost:8080/courses/' + itemId;
        Modal.confirm({
            title: '确定要删除吗?',
            icon: <ExclamationCircleOutlined/>,
            content: '此操作无法撤销',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: () => {
                let newCourseList = this.state.courseList;
                newCourseList.splice(index, 1);
                this.setState({
                    courseList: newCourseList
                });
                axios.post(url)
                    .catch(error =>
                        console.log(error)
                    );
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    render() {
        const {courseList}=this.state;

        const config={list:courseList,link:'/courses/newCourse',thead:['Id','名字','教师名字','课时'],
            propsConfig:['id','name','teacherName','duration'],onDelete:this.onDelete};
        return (
            <div>
                <TableList {...config}/>
            </div>
        );
    }
}

export default CourseList;
