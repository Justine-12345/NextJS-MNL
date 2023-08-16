'use client'
import React, { FormEvent, useState, useEffect, useContext } from 'react'
import { login } from '../../../actions/user'
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register } from '../../../actions/user';
import { UserContext } from '../../../utils/userContext';
import Link from 'next/link';
export default function page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();
    const { user, setUser } = useContext(UserContext)


    useEffect(() => {
        if (user) {
            router.push("/")
        }
    }, [])

    const notify = () => toast.success('Registered Successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const error = (text: string) => toast.warn(text, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();



        if (email === "" || password === "" || confirmPassword === "") {
            error("Please complete the form")
        }
        else if (password !== confirmPassword) {
            error("Password not match")
        }
        else {
            const data = {
                username: email,
                password: password
            }

            const res = await register(data)

            if (res.data.success) {
                setUser(res.data.success)
                notify()
                router.push('/')
            } else {
                error(res.data.error)
            }
        }





    };

    return (
        <div className="flex justify-center items-center h-[80vh] bg-black">
            <ToastContainer
            />
            <div className="bg-gray-800 shadow-lg rounded-md p-8 w-full sm:w-96">
                <h2 className="text-2xl font-medium mb-4 text-white">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
                            Confirm Password
                        </label>
                        <input
                            className="w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
                            type="password"
                            id="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>


                    <button
                        className="w-full mt-6 bg-gray-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Sign up
                    </button>

                    <div className=' flex justify-center pt-3 text-slate-400 ' >
                        <Link href="/login" >Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
