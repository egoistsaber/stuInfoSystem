import React, {Component} from 'react';
import {Button, Modal, Form, Input, Radio} from 'antd';
import axios from 'axios';

class ModalForm extends Component {
    handleOk = () => {
        this.props.handleOk();
    };

    handleCancel = () => {
        this.props.handleCancel();
    };

    handleChange = (event) => {
        this.props.handleChange(event);
    };

    render() {
        const {tempStu, modalFormConfig} = this.props;

        const {config} = modalFormConfig;

        return (
            <div>
                <Modal
                    title={modalFormConfig.title}
                    visible={this.props.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    {
                        tempStu && config && config.map((item) => {
                            let context;
                            if (item[0] === 'id') {
                                context =   <div className="form-group" style={{margin: 20}}>
                                    <label className="col-sm-2 control-label">{item[1]}</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" name={item[0]}
                                               placeholder={item[1]} value={tempStu[item[0]]} disabled/>
                                    </div>
                                    <br/>
                                </div>
                            } else if (item[0] === 'gender') {
                                context = <div className="radio col-xs-offset-1">
                                    <label>
                                        <input type="radio" name="gender" value="m" onChange={this.handleChange}
                                               checked={tempStu.gender === 'm' || !tempStu.gender}/>
                                        {item[1]}
                                    </label>
                                    <label style={{marginLeft: 10}}>
                                        <input type="radio" name="gender" value="f" onChange={this.handleChange}
                                               checked={tempStu.gender === 'f'}/>
                                        {item[2]}
                                    </label>
                                </div>
                            } else {
                                context=  <div className="form-group" style={{margin: 20}}>
                                    <label className="col-sm-2 control-label">{item[1]}</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" name={item[0]}
                                               placeholder={item[1]} value={tempStu[item[0]]}
                                               onChange={this.handleChange}/>
                                    </div>
                                    <br/>
                                </div>
                            }
                            return (
                                <React.Fragment>
                                    {context}
                                </React.Fragment>
                            );
                        })
                    }
                </Modal>
            </div>
        );
    }
}

export default ModalForm;
