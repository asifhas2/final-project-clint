import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import SocialLogin from './SocialLogin';
import { useLocation, useNavigate } from 'react-router';

const Login = () => {

  const location = useLocation();
  const navigate = useNavigate();

const {signInUserEmailPassword}=useAuth();
    const handelLogin=(data)=>{
        console.log(data);
        signInUserEmailPassword(data.email,data.password)
        .then(userData =>{
            console.log(userData);
            navigate(location.state || '/');
        })
        .catch(error =>{
            console.log(error);
        })
    }
 const {register,formState:{errors},handleSubmit,}=useForm();


    return (
       <div >
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(handelLogin)} className="card-body">
        <h1 className='text-3xl font-bold'>Please Login !</h1>
    
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register("email",{required:true})} className="input" placeholder="Email" />
          <label className="label">Password</label>
         {errors.email?.type === "required" && (
        <p role="alert">First name is required</p>
      )}
          <input type="password" {...register("password",{required:true,minLength:6})} className="input" placeholder="Password" />
          {
            errors.password?.type === "required" && <p className='text-red-500'>
                password is required
            </p>
          }
          {
            errors.password?.type === "minLength" && <p className='text-red-500'>
                password must be 6 character
            </p>
          }
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
      <SocialLogin></SocialLogin>
    </div>
       </div>
    );
};

export default Login;