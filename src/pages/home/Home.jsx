import React from 'react';
import { useNavigate } from 'react-router-dom';

const Helloworld = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <h1 className='flex justify-center mt-2 text-4xl font-bold text-red-500 pt-[30px]'>-: Welcome to my profile :-</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis ad nostrum dolorem delectus voluptatem velit ipsa ea aut eaque.</p>
            </div>
            <div className='flex flex-col  justify-center items-center h-[400px] mt-10'>
                <div className='text-white text-2xl'>Hello world</div>
                <div>
                    <button
                        className='border-[2px] bg-[#9bcc71] text-gray-800 hover:bg-[red] p-1 rounded-md mt-3'
                        onClick={() => navigate("/Signup")}
                    >
                        Click me
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Helloworld;