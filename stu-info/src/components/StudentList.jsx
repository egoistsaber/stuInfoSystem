import React, {Component} from 'react';
import axios from 'axios';
import {Button, Modal, Form, Input, Radio} from 'antd';
import {ExclamationCircleOutlined} from '@ant-design/icons';
import TableList from "./TableList";

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: [],
            visible: false,
            tempStu:{
                id:"",
                name:"",
                gender:"",
                address:"",
                classNumber:""
            },
            index:0
        };
        this.onDelete = this.onDelete.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleOk() {
        const {tempStu,studentList,index}=this.state;
        axios.post("http://localhost:8080/students/update",tempStu)
            .catch(error=>alert(error));
        studentList.splice(index,1,tempStu);
        this.setState({
            visible: false,
            studentList:studentList
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
            tempStu:this.state.studentList[index]
        });
    };

    handleChange(event) {
        const label = event.target.name;
        const {tempStu}=this.state;
        // tempStu[label]=event.target.value;
        //console.log(tempStu===this.state.studentList[this.state.index]); 返回true
        this.setState({
            // 引用的问题 或者说 浅拷贝
            // tempStu
            tempStu:{...tempStu,[label]:event.target.value}
        });
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

        const config = {
            list: studentList,
            link: '/students/newStudent',
            thead: ['Id', '姓名', '性别', '地址', '班级号'],
            propsConfig: ['id', 'name', 'gender', 'address', 'classNumber'],
            onDelete: this.onDelete,
            handleOk: this.showModal
        };

        const {tempStu}=this.state;

        return (
            <div>
                <TableList {...config}/>
                <Modal
                    title="更改学生信息"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div className="form-group" style={{margin:20}}>
                        <label className="col-sm-2 control-label">ID</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="Id"
                                   placeholder="ID" value={tempStu.id} disabled/>
                        </div>
                        <br/>
                    </div>
                    <div className="form-group" style={{margin:20}}>
                        <label htmlFor="inputName" className="col-sm-2 control-label">姓名</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputName" name="name"
                                   placeholder="姓名" value={tempStu.name} onChange={this.handleChange}/>
                        </div>
                        <br/>
                    </div>
                    <div className="radio col-xs-offset-1">
                        <label>
                            <input type="radio" name="gender" value="m" onChange={this.handleChange}
                                   checked={tempStu.gender==='m'||!tempStu.gender}/>
                                男
                        </label>
                        <label style={{marginLeft:10}}>
                            <input type="radio" name="gender" value="f" onChange={this.handleChange} checked={tempStu.gender==='f'}/>
                                女
                        </label>
                    </div>
                    <div className="form-group" style={{margin:20}}>
                        <label htmlFor="inputAddress" className="col-sm-2 control-label">地址</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputAddress"
                                   name="address" placeholder="地址" value={tempStu.address} onChange={this.handleChange}/>
                        </div>
                        <br/>
                    </div>
                    <div className="form-group" style={{margin:20}}>
                        <label htmlFor="inputClassNumber" className="col-sm-2 control-label">班级号</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputClassNumber"
                                   name="classNumber" placeholder="班级号" value={tempStu.classNumber} onChange={this.handleChange}/>
                        </div>
                        <br/>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default StudentList;
