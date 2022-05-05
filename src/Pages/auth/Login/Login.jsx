import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import Loading from '../../Extra/Loading/Loading';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const { register, handleSubmit } = useForm();
    const [signInWithGoogle, GoogleUser, googleLoading] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        userLoading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const onSubmit = data => {
        const email = data.email;
        const password = data.pass;
        signInWithEmailAndPassword(email, password);
    };
    if (userLoading) {
        return <div>
            <Loading />
        </div>;
    }
    if (googleLoading) {
        return <div>
            <Loading />
        </div>;
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (GoogleUser) {
        navigate(from, { replace: true });
    }
    if (error) {
        console.log(user);
    }
    return (
        <div>
            <div className='w-2/5 mx-auto mt-8'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="email" name='email' {...register("email", { required: true })} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label htmlFor="productName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="password" {...register("pass", { required: true })} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label htmlFor="productName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <button type="submit" className="text-white bg-[#FB9900] hover:bg-[#FB9900] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  dark:hover:bg-[#FB9900] ">Submit</button>
                </form>
                <div className='mt-10'>
                    <button onClick={() => signInWithGoogle()} type="submit" className="w-48 h-10 rounded-md border-2">
                        with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;