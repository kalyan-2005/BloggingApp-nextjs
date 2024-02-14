"use client"
import { register } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom"

export const RegisterForm = () => {
    const [state,formAction] = useFormState(register,undefined);
    const router = useRouter();
    useEffect(()=>{
        state?.success && router.push('/login');
    },[state?.success,router])
    const InputStyles = "w-3/4 p-3 my-3 bg-black block mx-auto";
    return (
        <form className="w-1/2 m-auto bg-gray-700 p-5 rounded" action={formAction}>
            <h1 className="text-3xl text-black font-bold text-center m-6">Register</h1>
            <input className={InputStyles} type="text" placeholder="username" name="username" id="" />
            <input className={InputStyles} type="text" placeholder="email" name="email" id="" />
            <input className={InputStyles} type="password" placeholder="password" name="password" id="" />
            <input className={InputStyles} type="password" placeholder="Re-enter password" name="passwordRepeat" id="" />
            <button className="my-3 block w-3/4 p-3 rounded mx-auto bg-blue-500">Register</button>
            {state?.error}
        </form>
    )
}