import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const Register = () => {

    const {register,handleSubmit,formState: { errors }}=useForm();
    const {registerEmailPassword}=useAuth();
    const handelRegister =(data)=>{
        console.log(data);
        registerEmailPassword(data.email,data.password)
        .then(data =>{
            console.log(data);
        })
        .catch(error =>{
            console.log(error);
        })
    
    }

    return (
        <div>
           <form onSubmit={handleSubmit(handelRegister)}>
             <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register("email",{required:true})} className="input" placeholder="Email" />

          {
            errors.email?.type === "required" && <p className='text-red-500'>
                email is required
            </p>
          }

          <label className="label">Password</label>
          <input type="password" {...register("password",{
            required:true,
            minLength:6,
            // pattern:/^[A-Za-z]+$/i 
          })} className="input" placeholder="Password" />

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
        {
            errors.password?.type === "pattern" && <p className='text-red-500'>
                password must be 1 upperCase and 1 LowerCase
            </p>
        }

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
           </form>
        </div>
    );
};

export default Register;