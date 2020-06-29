import React, {Component} from 'react';
import axios from 'axios';

class SaveStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            gender: "m",
            address: "",
            classNumber: ""
        };
        this.onSave = this.onSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSave() {
        console.log(111);
        const data = {
            name: this.state.name,
            gender: this.state.gender,
            address: this.state.address,
            classNumber: this.state.classNumber
        };
        axios.post('http://localhost:8080/students', data)
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
                        <label htmlFor="inputCourseName">姓名</label>
                        <input type="text" name="name" id="inputCourseName"
                               value={this.state.name} onChange={this.handleChange}
                               className="form-control" placeholder="姓名"/>
                    </div>
                    <div className="radio">
                        <label style={{marginRight:10}}>
                            <input type="radio" name="gender" id="optionsRadios1" value="m" onChange={this.handleChange} defaultChecked/>
                            男
                        </label>
                        <label>
                            <input type="radio" name="gender" id="optionsRadios2" value="f" onChange={this.handleChange}/>
                            女
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">地址</label>
                        <input type="text" id="inputAddress" name="address"
                               value={this.state.address} onChange={this.handleChange}
                               className="form-control" placeholder="地址"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputClassNumber">班号</label>
                        <input type="text" id="inputClassNumber" name="classNumber"
                               value={this.state.classNumber} onChange={this.handleChange}
                               className="form-control" placeholder="班号"/>
                    </div>
                    <div className="col-xs-offset-10">
                        <button type="submit" className="btn btn-primary">保存</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SaveStudent;
