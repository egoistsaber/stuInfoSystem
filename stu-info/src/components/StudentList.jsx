import React, {Component} from 'react';
import axios from 'axios';
import {Modal} from "antd";
import {ExclamationCircleOutlined} from '@ant-design/icons';
import TableList from "./TableList";

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: [],
        };
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8080/students')
            .then((response) => this.setState({studentList: response.data}));
    }

    onDelete(itemId, index) {
        const url = 'http://localhost:8080/students/' + itemId;
        Modal.confirm({
            title: '确定要删除吗?',
            icon: <ExclamationCircleOutlined/>,
            content: '此操作无法撤销',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: () => {
                let newStudentList = this.state.studentList;
                newStudentList.splice(index, 1);
                this.setState({
                    studentList: newStudentList
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
        const {studentList} = this.state;

        const config={list:studentList,link:'/students/newStudent',thead:['Id','姓名','性别','地址','班级号'],
            propsConfig:['id','name','gender','address','classNumber'],onDelete:this.onDelete};

        return (
            <div>
                <TableList {...config}/>
            </div>
        );
    }
}

export default StudentList;
