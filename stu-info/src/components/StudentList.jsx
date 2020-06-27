import React, {Component} from 'react';
import {AxiosInstance as axios} from "axios";

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state={
            studentList:[]
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>address</th>
                    <th>classNumber</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>涂畅</td>
                        <td>男</td>
                        <td>长沙县白沙乡</td>
                        <td>1905</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentList;
