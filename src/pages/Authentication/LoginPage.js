
import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import { getAuth , signInWithEmailAndPassword } from "firebase/auth";
const LoginPage =() => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    
    const navigate = useNavigate();
    const login = async() => {
        try{
            await signInWithEmailAndPassword(getAuth(), email, password)
            navigate("/articles");
        }catch(e){
            setError(e.message)
        }
    }
    return (
        <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-10 text-center text-2xl font-bold leading-10 tracking-tight text-gray-900">Login Page</h1><br/>
        </div>
            {error && <p className="error">{error}</p>}
            <input
            
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            
            placeholder="user@email.com"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            />
            <br/>
            <input 
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            /><br/>
            <button onClick={login}>Log In</button> 
            <Link to="/create-account" className="mt-10 text-center text-sm text-gray-500">Don't have an account ? Create one</Link>


            
        </div>
        </>
    );
}

export default LoginPage;