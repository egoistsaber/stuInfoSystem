import React, {Component} from 'react';

class TableLine extends Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete() {
        const {index,itemId} = this.props;
        this.props.onDelete(itemId,index);
    };

    handleOk=()=>{
        const {index} = this.props;
        this.props.handleOk(index);
    };

    showTable=()=>{
        const {id}=this.props.item;
        this.props.showTable(id);
    };

    render() {
        const {item,btnLabel} = this.props;
        const {propsConfig}=this.props;

        return (
            <React.Fragment>
                {propsConfig.map((elem,index)=><td key={index}>{
                       elem==='gender'?item[elem] === 'f' ? '女' : '男':item[elem]
                    }</td>)}
                <td>
                    <button className="btn btn-primary" style={{marginRight: 10}} onClick={this.showTable}>查看{btnLabel}</button>
                    <button className="btn btn-info" style={{marginRight: 10}} onClick={this.handleOk}>修改</button>
                    <button className="btn btn-danger" onClick={this.onDelete}>删除</button>
                </td>
            </React.Fragment>
        );
    }
}

export default TableLine;
