import React from 'react';

const UserRow = ({user, refetch, index}) => {
    const { name, email, _id } = user;
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{_id}</td>
        <td><button className="btn btn-xs rounded-full text-white p-2 bg-black">Details</button>
        </td>
        <td><button className="btn btn-xs rounded-full text-white p-2 bg-green-700">Update</button>
        </td>
        <td><button className="btn btn-xs rounded-full text-white p-2 bg-red-700">Delete</button>
        </td>
         
    </tr>
    );
};

export default UserRow;