import { Link,useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext.tsx';
import { useState,useEffect } from 'react';
import { signup } from '../auth/auth.tsx';

import signupImage from '../assets/signupImage.jpg';
import key from '../assets/key.svg';
import signupName from '../assets/signupName.svg';
import signupUsername from '../assets/signupUsername.svg'




function SignUp(){

    const {currentUser} = useAuth();
    
    const [username, setUsername] = useState<string>('');
    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error,setError] = useState<string>('');
    const [loading,setLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(()=>{
        if(currentUser)
            navigate('/');
    },[]);

    const handleSignUp = async (event:React.FormEvent)=>
    {
        event.preventDefault();
        setLoading(true);
        setError('');
        if(password !== confirmPassword){
            setError('Passwords do not match');
            setPassword('');
            setConfirmPassword('');
        }
        else{
            try{
                await signup(username,email,password);
                navigate('/login');
            } catch(error:any)
            {
                console.log(error);
                setError(error.message);
            }
        }
            
        setLoading(false);
    }
    
    return (
        <>
        <div className="bg-defYellow h-full w-full flex flex-row">
            <div className="font-instrumentSans font-semibold text-3xl top-5 right-5 absolute z-40"><p>Daily Blogger</p></div>

            

            <div className='h-full relative w-2/5 flex items-center justify-center'>

                    <form onSubmit={handleSignUp} className='flex flex-col space-y-6 w-full items-center'>
                        <div className='text-black text-3xl font-instrumentSans font-semibold '>Sign Up</div>
                        <div className='w-3/5 h-10 rounded-full relative'>
                            <div className='overflow-hidden absolute z-10 h-full pl-5 flex items-center justify-center'>
                                <img src={signupName} alt="" className='object-contain h-3/5'/>
                            </div>
                            <input
                                type="text"
                                id="login-username"
                                name="username"
                                value={username}
                                className="w-full h-full pl-16 pr-4 rounded-full bg-white text-gray-700 shadow-md placeholder-gray-500 outline-none font-inclusiveSans"
                                placeholder="Name"
                                autoComplete='username'
                                onChange={(e)=>setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className='w-3/5 h-10 rounded-full relative'>
                            <div className='overflow-hidden absolute z-10 h-full pl-5 flex items-center justify-center'>
                                <img src={signupUsername} alt="" className='object-contain h-3/5'/>
                            </div>
                            <input
                                type="email"
                                id="signup-email"
                                name="email"
                                value={email}
                                className="w-full h-full pl-16 pr-4 rounded-full bg-white text-gray-700 shadow-md placeholder-gray-500 outline-none font-inclusiveSans"
                                placeholder="Email"
                                autoComplete='email'
                                onChange={(e)=>setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className=' w-3/5 h-10 rounded-full relative'>
                            <div className='overflow-hidden absolute z-10 h-full pl-5 flex items-center justify-center'>
                                <img src={key} alt="" className='object-contain h-4/5'/>
                            </div>
                            <input
                                type="password"
                                id="signup-password"
                                name="password"
                                value={password}
                                className="w-full h-full pl-16 pr-4 rounded-full bg-white text-gray-700 shadow-md placeholder-gray-500 outline-none font-inclusiveSans"
                                onChange={(e)=>setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className=' w-3/5 h-10 rounded-full relative'>
                            <div className='overflow-hidden absolute z-10 h-full pl-5 flex items-center justify-center'>
                                <img src={key} alt="" className='object-contain h-4/5'/>
                            </div>
                            <input
                                type="password"
                                id="signup-confirmpassword"
                                name="confirmpassword"
                                value={confirmPassword}
                                className="w-full h-full pl-16 pr-4 rounded-full bg-white text-gray-700 shadow-md placeholder-gray-500 outline-none font-inclusiveSans"
                                placeholder="Confirm Password"
                                onChange={(e)=>setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error &&
                            (<div className='w-3/5 h-auto text-center'>
                             <p className="text-red-500 font-inclusiveSans font-bold text-sm">{error}</p>
                            </div>)
                        }  
                        <button type='submit' className='w-1/5 h-10 rounded-full flex items-center justify-center bg-[#FFF4D2]' disabled={loading}>
                            {!loading && <p className='text-defOrange text-xl font-semibold font-instrumentSans'>Sign Up</p>}
                            {loading && <div className="h-4/5 aspect-[1/1] border-4 border-defOrange border-t-transparent rounded-full animate-spin"></div>}
                        </button>
                        <div className='w-2/5 flex flex-col items-center justify-center text-sm'>
                            <p className='text-black font-instrumentSans m-0 p-0'>Already have an Account?</p>
                            <Link to="/login"><p className='text-defOrange font-instrumentSans align-top '>Login Here</p></Link>
                        </div>

                    </form>
                    

                </div>
                <div className="h-full w-3/5 relative">
                    <div className='overflow-hidden align-bottom h-full w-full absolute z-0'>
                        <img src={signupImage} alt="" className='w-full h-full object-cover object-[1%_1%]'/>
                    </div>
                <div className=' absolute h-full w-full z-10 bg-black opacity-30'></div>
            </div>
        </div>
        </>
    );
}

export default SignUp;

