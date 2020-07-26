import React, {Component} from 'react';
import {Modal} from 'antd';

class ModalTable extends Component {
    render() {
        const {modalTableConfig} = this.props;
        const {title, visible, handleOk, handleCancel,thead,data} = modalTableConfig;
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
                        {data&&data.map((item,index)=>{
                           item=Object.values(item);
                            return (
                                <tr key={index}>
                                    {item&&item.map((ele,i)=>
                                        <td key={i}>{ele}</td>
                                    )}
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
