import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    if (user) {
        console.log(user);
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold">Login</h2>
                    <div className="divider">OR</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", { 
                                    required:{
                                        value:true,
                                        message:'Email Address Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email' // JS only: <p>error message</p> TS only support string
                                      }
                                 })}
                                />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", { 
                                    required:{
                                        value:true,
                                        message:'Email Address Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'You must write atleast 6 character' // JS only: <p>error message</p> TS only support string
                                      }
                                 })}
                                />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password.message}</span>}
                            </label>
                        </div>
                        <input className='btn btn-primary w-full' type="submit" />
                    </form>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-secondary">SIGNIN_WITH_GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;