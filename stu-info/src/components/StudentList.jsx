import React, {Component} from 'react';
import axios from 'axios';
import {Modal} from 'antd';
import {ExclamationCircleOutlined} from '@ant-design/icons';
import TableList from "./TableList";
import ModalForm from "./ModalForm";

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
        const {studentList,visible,tempStu} = this.state;

        const config = {
            list: studentList,
            link: '/students/newStudent',
            thead: ['Id', '姓名', '性别', '地址', '班级号'],
            propsConfig: ['id', 'name', 'gender', 'address', 'classNumber'],
            onDelete: this.onDelete,
            handleOk: this.showModal
        };

        const modalFormConfig={
            title:"更改学生信息",
            config:[['id','ID'],['name','姓名'],['gender','男','女'],['address','地址'],['classNumber','班级号']]
        };

        return (
            <div>
                <TableList {...config}/>
                <ModalForm tempStu={tempStu} visible={visible} handleOk={this.handleOk}
                           handleCancel={this.handleCancel} handleChange={this.handleChange} modalFormConfig={modalFormConfig}/>
            </div>
        );
    }
}

export default StudentList;
