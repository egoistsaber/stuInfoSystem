import React, {Component} from 'react';
import {Modal} from 'antd';

class ModalTable extends Component {
    render() {
        const {modalTableConfig} = this.props;
        const {title, visible, handleOk, handleCancel,thead,courses} = modalTableConfig;
        return (
            <div>
                <Modal
                    title={title}
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            {thead&&thead.map((item,index)=>
                                <th key={index}>{item}</th>
                            )}
                        </tr>
                        </thead>
                        <tbody>
                        {courses&&courses.map((item,index)=>{
                            const {course,grade}=item;
                            return (
                                <tr key={index}>
                                    <td>{course.id}</td>
                                    <td>{course.name}</td>
                                    <td>{course.teacherName}</td>
                                    <td>{course.duration}</td>
                                    <td>{grade}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </Modal>
            </div>
        );
    }
}

export default ModalTable;
