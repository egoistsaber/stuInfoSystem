import React, {Component} from 'react';
import { Modal, Button } from 'antd';

class SaveModal extends Component {
    state = {
        visible: false,
        confirmLoading: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            confirmLoading: true
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };

    onSave=formData=>{
        console.log('formdata:'+formData);
    };

    render() {
        const { visible, confirmLoading } = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    新建
                </Button>
                <Modal
                    title="新建"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <form>
                        <label>课程名</label>
                        <input type="text" name="name"/><br/>
                        <label>教师名</label>
                        <input type="text" name="teacherName"/><br/>
                        <label>课时</label>
                        <input type="text" name="duration"/><br/>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default SaveModal;
