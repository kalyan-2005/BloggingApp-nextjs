"use client"

import { handleLogin } from '@/lib/action';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import {useFormState} from 'react-dom'

export const LoginForm = () => {
    const [state,formAction] = useFormState(handleLogin,undefined)
    const InputStyles = "w-full p-3 my-3 bg-black block";
    const router = useRouter();
    useEffect(()=>{
        state?.success && router.push('/');
    },[router,state?.success])
    return (
        <form className="w-3/4 m-auto" action={formAction}>
            <h1 className="text-3xl text-black font-bold text-center m-6">Login</h1>
            <input className={InputStyles} type="text" placeholder="username" name="username" id="" />
            <input className={InputStyles} type="password" placeholder="password" name="password" id="" />
            <button className="my-3 block w-full p-3 rounded mx-auto bg-blue-500">Log in</button>
            {state?.error}
        </form>
    )
}