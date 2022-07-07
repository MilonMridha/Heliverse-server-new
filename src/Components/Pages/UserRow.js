import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { name, email, _id } = user;
    const navigate = useNavigate();
    const handleDetails = (id) => {
        navigate('/user/' + id)
    }
    const handleDelete = id => {
        const url = `http://localhost:5000/users/${id}`;

        fetch(url, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.error('User Deleted Successfully')
                }
                refetch()

            })
    }

    const updateUser = () =>{

    }

    return (
        
            <tr>
                <th>{index + 1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{_id}</td>
                <td><button onClick={() => handleDetails(_id)} className="btn btn-xs rounded-full text-white p-2 bg-black">Details</button>
                </td>
                
                <td><button onClick={() => handleDelete(_id)} className="btn btn-xs rounded-full text-white p-2 bg-red-700">Delete</button>
                </td>

            </tr>
            
            
            
        
    );
};

export default UserRow;