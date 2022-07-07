import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const SingleUser = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    const [update, setUpdate] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [update]);

    //Update User 

    const updateUser = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const name = event.target.name.value;
        const password = event.target.password.value;
        const newUser = {name, email, password}
    
    fetch(`http://localhost:5000/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify(newUser),

        })
            .then(res =>res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data)
                    toast.success("Update successful");
                    event.target.reset()
                    setUpdate(newUser)
                }
            })
    }
    return (
        <div className='mt-10'>
            <h1 className='text-2xl font-semibold'>Name: {detail.name}</h1>
            <h1 className='text-xl font-semibold'>Email: {detail.email}</h1>
            <h1 className='text-xl font-semibold'>ID: {detail._id}</h1>

            <section className='w-1/3 mx-auto mt-40'>
                <div>
                    <h2 className='text-2xl font-semibold mb-5'>Update Now</h2>
                    <form onSubmit={updateUser}>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="name" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required autoComplete='off' />

                            <label for="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">

                            <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required autoComplete='off' />

                            <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required autoComplete='off' />
                            <label for="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>

                        <input type="submit" value="Update" className="text-white bg-purple-900 hover:bg-purple-800 focus:ring-4 focus:outline-none  font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center " />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default SingleUser;