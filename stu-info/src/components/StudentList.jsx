import React, {Component} from 'react';
import axios from 'axios';
import {Modal} from 'antd';
import {ExclamationCircleOutlined} from '@ant-design/icons';
import TableList from "./TableList";
import ModalForm from "./ModalForm";
import ModalTable from "./ModalTable";

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: [],
            formVisible: false,
            tableVisible: false,
            tempStu: {
                id: "",
                name: "",
                gender: "",
                address: "",
                classNumber: ""
            },
            tempCourses: [],
            index: 0
        };
        this.onDelete = this.onDelete.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleOk() {
        const {tempStu, studentList, index} = this.state;
        axios.post("http://localhost:8080/students/update", tempStu)
            .catch(error => alert(error));
        studentList.splice(index, 1, tempStu);
        this.setState({
            formVisible: false,
            studentList: studentList
        });
    };

    handleCancel = () => {
        this.setState({
            formVisible: false,
        });
    };

    showModal = (index) => {
        this.setState({
            formVisible: true,
            index: index,
            tempStu: this.state.studentList[index]
        });
    };

    handleChange(event) {
        const label = event.target.name;
        const {tempStu} = this.state;
        // tempStu[label]=event.target.value;
        //console.log(tempStu===this.state.studentList[this.state.index]); 返回true
        this.setState({
            // 引用的问题 或者说 浅拷贝
            // tempStu
            tempStu: {...tempStu, [label]: event.target.value}
        });
    }

    showModalTable = (id) => {
        let url = 'http://localhost:8080/students/' + id + '/grade';
        if (id !== undefined)
            axios.get(url)
                .then(response => this.setState(
                    {
                        tempCourses: response.data.courses,
                        tableVisible: true,
                    }
                )).catch(error=>alert("没有选课"));
    };

    handleTableCancel = () => {
        this.setState({
            tableVisible: false,
        });
    };

    handleTableOk = () => {
        this.setState({
            tableVisible: false
        });
    };

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
        const {studentList, formVisible, tempStu, index} = this.state;

        const config = {
            list: studentList,
            link: '/students/newStudent',
            thead: ['Id', '姓名', '性别', '地址', '班级号'],
            propsConfig: ['id', 'name', 'gender', 'address', 'classNumber'],
            onDelete: this.onDelete,
            handleOk: this.showModal,
            showTable: this.showModalTable,
            btnLabel: "选修的所有课程"
        };

        const modalFormConfig = {
            title: "更改学生信息",
            config: [['id', 'ID'], ['name', '姓名'], ['gender', '男', '女'], ['address', '地址'], ['classNumber', '班级号']]
        };

        const modalTableConfig = {
            title: "选修的所有课程",
            thead: ['课程号', '课程名', '教师姓名', '课时', '课程成绩'],
            visible: this.state.tableVisible,
            handleOk: this.handleTableOk,
            handleCancel: this.handleTableCancel,
            courses: this.state.tempCourses
        };

        return (
            <div>
                <TableList {...config}/>
                <ModalForm tempStu={tempStu} visible={formVisible} handleOk={this.handleOk}
                           handleCancel={this.handleCancel} handleChange={this.handleChange}
                           modalFormConfig={modalFormConfig}/>
                <ModalTable modalTableConfig={modalTableConfig}/>
            </div>
        );
    }
}

export default StudentList;
