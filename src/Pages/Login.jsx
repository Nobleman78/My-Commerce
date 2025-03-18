import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../Utility/Firebase";

const Login = () => {
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const emailRef = useRef();
    const provider = new GoogleAuthProvider()

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        form.reset()

        if(password.length <6){
            setErrorMessage('Password Must Be Greater Than Six ')
        }
        


        //When You want to try login functionaltiy 
        // Email :  jiten23@gmail.com
        // Password : 123456789
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res.user)
                setSuccess(true)



            })
            .catch(error => {
                console.log('Error', error.message)
                setErrorMessage(error.message)
                setSuccess(false)
            })



    }
    const handleGoogleSignIn = () => {
        
        signInWithPopup(auth, provider)

            .then((result) => {
                console.log(result.user);
                setSuccess(true)


            })
            .catch(error => {
                console.log('Error', error)
                setSuccess(false);

            })

    }
    const handleForgetPassword = () => {
        console.log('Get me email password. ', emailRef.current.value);
        const email = emailRef.current.value;
        if (!email) {
            console.log('Please Provide an email address ')

        }
        else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert('Password Reset Email Sent!Check the gmail.')
                })
        }

    }


    return (
        <div>
            <form onSubmit={handleLogin} className='shadow-2xl rounded-xl w-[90%] h-[400px] px-5 py-5 sm:max-w-96 m-auto mt-14 text-gray-800' >
                <h1 className="text-2xl">Sign in</h1>
                    <p onClick={handleGoogleSignIn} className=" border cursor-pointer flex items-center gap-5 justify-center mt-4 px-2 py-1"> <FcGoogle ></FcGoogle>Login with google</p>
                <div className="flex flex-col gap-1 ">
                    <div className="flex mt-3 flex-col gap-2">
                        <label>Email</label>
                        <input ref={emailRef} name="email" className="w-[100%] px-2 border outline-none shadow-none rounded py-1" type="email" placeholder='Enter Your Email' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Password</label>
                        <input name="password" className="w-[100%] px-2 border outline-none shadow-none py-1 rounded" type="password" placeholder='Enter Your Password' />
                    </div>
                    <div className='items-center flex justify-between   '>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" />
                        <span className='text-sm remember-me ' >Remember Me</span>
                    </div>
                    <div>
                        <a onClick={handleForgetPassword} className='text-sm cursor-pointer '>Forgot Password</a>
                    </div>
                </div>
                    <button className=" w-[100%] my-2 py-1 cursor-pointer bg-blue-700 text-white" >Sign in</button>
                    <div className="flex gap-2 mt-2">
                        <p>Doesn't Have Account?</p>
                        <Link to='/registration'><button className="cursor-pointer">Registration Here</button></Link>
                    </div>
                    {
                    success && <p className='text-green-500'>
                      Login Succesful
                    </p>
                }
                </div>


            </form>

        </div>
    );
};

export default Login;