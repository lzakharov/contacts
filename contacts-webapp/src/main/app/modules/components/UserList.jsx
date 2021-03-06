import React from 'react';
import {Link} from 'react-router';

const propTypes = {
    users: React.PropTypes.arrayOf(React.PropTypes.shape({
        login: React.PropTypes.string.isRequired,
        fullName: React.PropTypes.string.isRequired
    })).isRequired,
    token: React.PropTypes.string.isRequired,
    deleteUser: React.PropTypes.func.isRequired
};

const UsersList = ({users, token, deleteUser}) => (
    <table className="table">
        <thead>
        <tr>
            <th>Login</th>
            <th>Full Name</th>
            <th>Address</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {users.map(({login, fullName, address}) => (
            <tr key={login}>
                <td>{login}</td>
                <td>{fullName}</td>
                <td>{address}</td>
                <td>
                    <div className="btn-group" role="group">
                        <Link className="btn btn-primary btn-xs"
                              to={`/users/view/${encodeURIComponent(login)}`}>
                            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                        </Link>
                        <button onClick={() => deleteUser(token, login)} className="btn btn-danger btn-xs" type="button">
                            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                        </button>
                    </div>
                </td>
            </tr>
        ))}
        </tbody>
    </table>
);

UsersList.propTypes = propTypes;

export default UsersList;
