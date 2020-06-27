import React, {Component} from 'react';
import axios from "axios";

class CourseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseList: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/courses')
            .then((response) => this.setState({courseList: response.data}));
    }

    render() {
        const {courseList}=this.state;

        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>名字</th>
                        <th>教师名字</th>
                        <th>课时</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        courseList.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.teacherName}</td>
                                <td>{item.duration}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CourseList;
