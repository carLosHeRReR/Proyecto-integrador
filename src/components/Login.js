import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, Link }from 'react-router-dom';
import { async } from "@firebase/util";
import { Alert } from "./Alert";

export function Login(){

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const { login, resetPassword }= useAuth()
    const navigate = useNavigate()
    const [error, seterror] = useState();

    const handleChange = ({target: {name,value}}) => 
        setUser({...user,[name]: value})

    const handleSubmit = async (e) => {
        e.preventDefault()
        seterror('');
        try {
           await login(user.email, user.password)
           navigate("/");
        } catch (error) {
           console.log(error.code);
           if (error.code === "auth/user-not-found") {
            seterror("Correo invalido")
           }
           if (error.code === "auth/wrong-password") {
            seterror("Constreseña Incorrecta")
           }
        }
    };

    const handleResetPassword = async () => {
        if (!user.email) return seterror('');
        try {
            await resetPassword(user.email);
            seterror('te enviamos un email')
        }catch (error){ 
            seterror(error.message);

        }
    }


    return (
        <div className="w-full max-w-xs m-auto">

            {error && <Alert message={error}/>}

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm fornt-fold mb-2">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="correo electronico" 
                    className="shadow appearance-none border rounder w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 onChange={handleChange}/>
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm fornt-fold mb-2">Password</label>
                <input 
                    type="password"
                    name="password" 
                    placeholder="******" 
                    id="password" 
                    className="shadow appearance-none border rounder w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}/>
            </div>

            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
                <a href="#!" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Recuperar Password</a>
            </div>
        </form>

        <p className="my-5 text-sm flex justify-between px-3 ">¿Aun no tienes una cuenta?<Link to='/register' className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleResetPassword}>Registrate</Link></p>

        </div>
    )
}