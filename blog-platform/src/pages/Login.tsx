import React,{useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signin } from '../auth/auth.tsx';
import { useAuth } from '../auth/AuthContext.tsx';

import homeImage from '../assets/homeImage.jpg';
import profile from '../assets/profile2.svg';
import key from '../assets/key.svg';



function Login()
{
    const {currentUser} = useAuth();
    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [error,setError] = useState<string>('');
    const [loading,setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(()=>{
        if(currentUser)
            navigate('/');
    },[]);

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('');
        
        setLoading(true);
        try{
            await signin(email,password);
            navigate('/');
        } catch(err:any)
        {
            setError('Failed to log in. Please check your credentials');
        }finally{
            setLoading(false);
        }
    };

    return (
        <>
        <div className="w-full h-full bg-defYellow">
            <div className="font-instrumentSans font-semibold text-3xl top-5 left-5 absolute z-40"><p>Daily Blogger</p></div>
            <div className="flex flex-row h-full">
                <div className='h-full w-1/2 relative'>

                    <div className='absolute h-full w-full overflow-hidden z-0'>
                        <img src={homeImage} alt="" className='w-full h-full object-cover '/>
                    </div>

                    <div className=' absolute h-full w-full z-10 bg-black opacity-30'></div>
                    
                </div>

                <div className='h-full relative w-1/2 flex items-center justify-center'>

                    <form onSubmit={handleLogin} className="flex flex-col space-y-6 items-center w-full">
                        <div className='text-black text-3xl font-instrumentSans font-semibold '>Login</div>
                        <div className='w-3/5 h-10 rounded-full relative'>
                            <div className='overflow-hidden absolute z-10 h-full pl-5 flex items-center justify-center'>
                                <img src={profile} alt="" className='object-contain h-3/5'/>
                            </div>
                            <input
                                type="email"
                                value={email}
                                id="login-email"
                                name="email"
                                className="w-full h-full pl-16 pr-4 rounded-full bg-white text-gray-700 shadow-md placeholder-gray-500 outline-none font-inclusiveSans"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="username"
                                required
                            />
                        </div>
                        <div className=' w-3/5 h-10 rounded-full relative'>
                            <div className='overflow-hidden absolute z-10 h-full pl-5 flex items-center justify-center'>
                                <img src={key} alt="" className='object-contain h-4/5'/>
                            </div>
                            <input
                                type="password"
                                value={password}     
                                id="login-password"
                                name="password"
                                className="w-full h-full pl-16 pr-4 rounded-full bg-white text-gray-700 shadow-md placeholder-gray-500 outline-none font-inclusiveSans"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                                required
                            />
                        </div>
                        {error &&
                            (<div className='w-3/5 h-auto text-center'>
                             <p className="text-red-500 font-inclusiveSans font-bold text-sm">{error}</p>
                            </div>)
                        }   
                        <button type='submit' className='w-1/5 h-10 rounded-full flex items-center justify-center bg-[#FFF4D2]' disabled={loading}>
                            {!loading && <p className='text-defOrange text-xl font-semibold font-instrumentSans'>Let's Go!</p>}
                            {loading && <div className="h-4/5 aspect-[1/1] border-4 border-defOrange border-t-transparent rounded-full animate-spin"></div>}
                        </button>
                        <div className='w-2/5 flex flex-col items-center justify-center text-sm'>
                            <p className='text-black font-instrumentSans m-0 p-0'>Don't have an Account?</p>
                            <Link to="/signup"><p className='text-defOrange font-instrumentSans align-top '>Sign Up!</p></Link>
                        </div>
                    </form>


                </div>
            </div>

        </div>
        </>
    );
}

export default Login;