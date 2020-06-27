import React, {Component} from 'react';
import axios from 'axios';

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state={
            studentList:[]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/students')
            .then((response)=>console.log(response.data));
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>address</th>
                        <th>classNumber</th>
                    </tr>
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
