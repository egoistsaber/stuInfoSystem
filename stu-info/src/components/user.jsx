import React, {Component} from 'react';

class User extends Component {
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>address</th>
                    <th>classNumber</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>涂畅</td>
                        <td>男</td>
                        <td>长沙县白沙乡</td>
                        <td>1905</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default User;
