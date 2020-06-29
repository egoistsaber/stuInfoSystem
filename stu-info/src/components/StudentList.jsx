import React, {Component} from 'react';
import axios from 'axios';
import {NavLink} from "react-router-dom";
import {Button, Modal} from "antd";
import {ExclamationCircleOutlined} from '@ant-design/icons';
import TableLine from "./TableLine";
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
        const confirmed = Modal.confirm({
            title: 'Are you sure delete this task?',
            icon: <ExclamationCircleOutlined/>,
            content: 'Some descriptions',
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
                {/*<div className="row">*/}
                {/*    <div className="col-xs-2" style={{fontSize: "20px", fontFamily: "serif", fontWeight: "bold"}}>查询表格*/}
                {/*    </div>*/}
                {/*    <div className="col-xs-2 col-xs-offset-8">*/}
                {/*        <NavLink to='/students/newStudent'><Button type="primary">新建</Button></NavLink>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <table className="table">*/}
                {/*        <thead>*/}
                {/*        <tr>*/}
                {/*            <th>ID</th>*/}
                {/*            <th>姓名</th>*/}
                {/*            <th>性别</th>*/}
                {/*            <th>地址</th>*/}
                {/*            <th>班级号</th>*/}
                {/*            <th>操作</th>*/}
                {/*        </tr>*/}
                {/*        </thead>*/}
                {/*        <tbody>*/}
                {/*        {*/}
                {/*            studentList.map((item, index) => (*/}
                {/*                <tr key={index}>*/}
                {/*                    <TableLine propsConfig={['id','name','gender','address','classNumber']}*/}
                {/*                               itemId={item.id} index={index} item={item} onDelete={this.onDelete}/>*/}
                {/*                </tr>*/}
                {/*            ))*/}
                {/*        }*/}
                {/*        </tbody>*/}
                {/*    </table>*/}
                {/*</div>*/}
                <TableList {...config}/>
            </div>
        );
    }
}

export default StudentList;
