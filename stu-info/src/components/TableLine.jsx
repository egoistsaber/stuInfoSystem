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

    render() {
        const {item} = this.props;
        const {propsConfig}=this.props;

        return (
            <React.Fragment>
                {propsConfig.map((elem,index)=><td key={index}>{
                       elem==='gender'?item[elem] === 'f' ? '女' : '男':item[elem]
                    }</td>)}
                <td>
                    <button className="btn btn-info" style={{marginRight: 10}} onClick={this.handleOk}>修改</button>
                    <button className="btn btn-danger" onClick={this.onDelete}>删除</button>
                </td>
            </React.Fragment>
        );
    }
}

export default TableLine;
