import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Button} from "antd";
import TableLine from "./TableLine";
import './TableList.css';


class TableList extends Component {
    constructor(props) {
        super(props);
        this.state={
            visible:false
        };
    }



    render() {
        const {list, link, thead, propsConfig, onDelete,handleOk,btnLabel,showTable} = this.props;

        return (
            <div>
                <div className="row">
                    <div className="col-xs-2" style={{fontSize: "20px", fontFamily: "serif", fontWeight: "bold"}}>查询表格
                    </div>
                    <div className="col-xs-2 col-xs-offset-8">
                        <NavLink to={link}><Button type="primary">新建</Button></NavLink>
                    </div>
                </div>
                <div style={{marginTop:10}}>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            {
                                thead.map((item, index) => <th key={index}>{item}</th>)
                            }
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            list.map((item, index) => (
                                <tr key={index}>
                                    <TableLine propsConfig={propsConfig} itemId={item.id} index={index}
                                               item={item} onDelete={onDelete} handleOk={handleOk} btnLabel={btnLabel} showTable={showTable}/>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TableList;
