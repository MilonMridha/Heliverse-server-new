import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserRow = ({ user, refetch, index }) => {
    const { name, email, _id } = user;
    const navigate = useNavigate();
    const handleDetails = (id) => {
        navigate('/user/' + id)
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{_id}</td>
            <td><button onClick={() => handleDetails(_id)} className="btn btn-xs rounded-full text-white p-2 bg-black">Details</button>
            </td>
            <td><button className="btn btn-xs rounded-full text-white p-2 bg-green-700">Update</button>
            </td>
            <td><button className="btn btn-xs rounded-full text-white p-2 bg-red-700">Delete</button>
            </td>

        </tr>
    );
};

export default UserRow;