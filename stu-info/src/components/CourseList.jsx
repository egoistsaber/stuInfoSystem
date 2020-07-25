import React, {Component} from 'react';
import axios from "axios";
import {Modal} from "antd";
import {ExclamationCircleOutlined} from '@ant-design/icons';
import TableList from "./TableList";
import ModalForm from "./ModalForm";

class CourseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseList: [],
            visible: false,
            tempCourse:{
                id:"",
                name:"",
                duration:"",
                teacherName:"",
            },
            index:0
        };
        this.onDelete = this.onDelete.bind(this);
    }


    handleOk=()=> {
        const {tempCourse,courseList,index}=this.state;
        axios.post("http://localhost:8080/courses/update",tempCourse)
            .catch(error=>alert(error));
        courseList.splice(index,1,tempCourse);
        this.setState({
            visible: false,
            courseList
        });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    showModal = (index) => {
        this.setState({
            visible: true,
            index:index,
            tempCourse:this.state.courseList[index]
        });
    };

    handleChange=(event)=> {
        const label = event.target.name;
        const {tempCourse}=this.state;
        this.setState({
            // 引用的问题 或者说 浅拷贝
            // tempStu
            tempCourse:{...tempCourse,[label]:event.target.value}
        });
    };

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
        const {courseList,visible,tempCourse}=this.state;

        const config={list:courseList,link:'/courses/newCourse',thead:['Id','名字','教师名字','课时'],
            propsConfig:['id','name','teacherName','duration'],onDelete:this.onDelete,handleOk: this.showModal, btnLabel:"选课的所有学生"};

        const modalFormConfig={
            title:"更改课程信息",
            config:[['id','ID'],['name','课程名'],['teacherName','教师名'],['duration','课时']]
        };

        return (
            <div>
                <TableList {...config}/>
                <ModalForm tempStu={tempCourse} visible={visible} handleOk={this.handleOk}
                           handleCancel={this.handleCancel} handleChange={this.handleChange} modalFormConfig={modalFormConfig}/>
            </div>
        );
    }
}

export default CourseList;
