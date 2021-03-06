import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import UserRow from './UserRow';
import signOut from '../../image/signout.png'
const GetUser = () => {

    const { data: users, refetch } = useQuery('users', () => fetch('https://thawing-gorge-51396.herokuapp.com/users', {
        method: 'GET'
    }).then(res => res.json()))

    console.log(users)
    
    return (
        <div>
            <h1 className='text-xl font-semibold mt-5'>Get All User: {users?.length}</h1>
            <div className='flex justify-end px-10'>
            <Link className='text-right' to='/'> <img style={{width: '60px'}} src={signOut} alt="" /></Link>
            </div>
            <div className="overflow-x-auto mt-5 px-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>ID</th>
                            <th>Detail with Id</th>
                            
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((user, index) => <UserRow
                                user={user}
                                index={index}
                                key={user._id}
                                refetch={refetch}
                            ></UserRow>)
                        }

                    </tbody>
                </table>
            </div>
            

        </div>
    );
};

export default GetUser;