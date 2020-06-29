import React, {Component} from 'react';
import axios from 'axios';

class SaveCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            teacherName: "",
            duration: ""
        };
        this.onSave = this.onSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSave() {
        console.log(111);
        const data = {
            name: this.state.name,
            teacherName: this.state.teacherName,
            duration: this.state.duration
        };
        axios.post('http://localhost:8080/courses', data)
            .then(response => console.log(response)
            ).catch(error => console.log(error)
        )
    };

    handleChange(event) {
        const label = event.target.name;
        this.setState({[label]: event.target.value});
    }

    render() {
        return (
            <div style={{width: '30%', margin: "5% 35%"}}>
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label htmlFor="inputCourseName">课程名</label>
                        <input type="text" name="name" id="inputCourseName"
                               value={this.state.name} onChange={this.handleChange}
                               className="form-control" placeholder="课程名"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputTeacherName">教师名</label>
                        <input type="text" name="teacherName" id="inputTeacherName"
                               value={this.state.teacherName} onChange={this.handleChange}
                               className="form-control" placeholder="教师名"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputDuration">课时</label>
                        <input type="text" id="inputDuration" name="duration"
                               value={this.state.duration} onChange={this.handleChange}
                               className="form-control" placeholder="课时"/>
                    </div>
                    <div className="col-xs-offset-10">
                        <button type="submit" className="btn btn-primary">保存</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SaveCourse;
