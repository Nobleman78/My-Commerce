import React, { useContext, useEffect } from 'react';
import { Shopcontex } from '../../Context/Contex';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Myprofile = () => {
    const {user} = useContext(Shopcontex)
    console.log(user)
    const navigate = useNavigate()
    useEffect(()=>{

    },[])
    return user? (
        // This is just demo Profile Info ... It will be implement later...
        <div className='flex flex-col md:flex-row border gap-4 '>
            <div className='flex flex-col w-1/3 px-5 py-5'>
                {/* After Login successfully it will get the name from the firebase */}
                <img src="" alt="" />
                <h2>Name: Jesmin Chakma  </h2>

            </div>
            <div className='w-2/3 flex flex-col px-5 py-5 gap-3 '>
                <h2>My Profile</h2>
                <hr />
                <div className='flex justify-between items-center '>
                    <div className='flex flex-col'>
                        <p>Full Name</p>
                        {/* <p>{user.slice(0,5)}</p> */}

                    </div>
                    <div className='flex flex-col'>
                        <p>Email</p>
                        <p>{user}</p>

                    </div>
                  
                </div>

            </div>
          
        </div>
    ) : navigate('/login')
};

export default Myprofile;