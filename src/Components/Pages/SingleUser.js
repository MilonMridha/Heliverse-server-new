import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleUser = () => {
    const {id} = useParams();
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, []);
    return (
        <div className='mt-10'>
            <h1 className='text-2xl font-semibold'>Name: {detail.name}</h1>
            <h1 className='text-xl font-semibold'>Email: {detail.email}</h1>
            <h1 className='text-xl font-semibold'>ID: {detail._id}</h1>
        </div>
    );
};

export default SingleUser;