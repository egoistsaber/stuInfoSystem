import React, {Component} from 'react';
import axios from 'axios';

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/students')
            .then((response) => this.setState({studentList: response.data}));
    }

    render() {
        const {studentList} = this.state;

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
                    {
                        studentList.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.gender}</td>
                                <td>{item.address}</td>
                                <td>{item.classNumber}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentList;
