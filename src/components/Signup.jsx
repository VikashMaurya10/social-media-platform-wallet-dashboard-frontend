import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { toast } from 'react-toastify'
import axios from 'axios'

const Signup = ({ _this }) => {
    const [showPass, setShowPass] = useState(false)
    const [typePass, setTypePass] = useState('password')
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const base_URL = import.meta.env.VITE_BASE_URL
    const Navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData({
            ...userData, [name]: value
        })
    }

    const handleSubmit = () => {
        let isValidUsername = _this.ValidUserName(userData.username)
        let isValidEmail = _this.ValidateEmail(userData.email)
        let isPasswordStrong = _this.PasswordStrength(userData.password)

        if (!isValidUsername) return toast.warn("Please enter username")
        if (!isValidEmail) return toast.warn("Please enter valid email")
        if (!isPasswordStrong) return toast.warn("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character")

        if (isValidUsername && isValidEmail && isPasswordStrong) {
            axios({
                method: 'post',
                url: `${base_URL}/v1/auth/signup`,
                data: userData
            }).then((res) => {
                toast.warn(`${res.data.data}`)
                if (res.data.data === "now registered") {
                    Navigate("/login")
                }
            }).catch((err) => {
                console.log(err);
            })
        }

    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='bg-LightGray backdrop-blur bg-white/10 sm:w-[400px] w-full h-fit rounded text-White  p-8 mx-4'>
                <h1 className='text-center mt-3 text-2xl font-semibold cursor-default'>Wallet Signup</h1>
                <form className='flex flex-col justify-center items-center gap-4 mt-5'>
                    <div className='w-full'>
                        <label htmlFor="username">Username</label>
                        <input autoComplete='off' type="text" name='username' className='block outline-none text-black w-full p-[0.3rem] rounded'
                            value={userData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="email">Email</label>
                        <input autoComplete='off' type="email" name='email' className='block outline-none text-black w-full p-[0.3rem] rounded'
                            value={userData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="password">Password</label>
                        <div className='flex items-center bg-White rounded p-[0.3rem] '>
                            <input autoComplete='off' type={typePass} name='password' className='block outline-none text-black w-full'
                                value={userData.password}
                                onChange={handleChange}
                            />
                            <div className=''>
                                {showPass ? <AiOutlineEye className='text-Black text-xl cursor-pointer' onClick={() => {
                                    setShowPass(!showPass)
                                    setTypePass("password")
                                }} /> : < AiOutlineEyeInvisible className='text-Black text-xl cursor-pointer' onClick={() => {
                                    setTypePass("text")
                                    setShowPass(!showPass)
                                }} />}</div>
                        </div>
                    </div>
                    <button type='button'
                        className='bg-blue-700 text-black py-[0.4rem] px-4 w-[40%] rounded font-medium hover:bg-blue-500 transition-all duration-300'
                        onClick={handleSubmit}
                    >Signup</button>
                    <h2 className='cursor-default font-normal'>Already Registered ? <NavLink to={"/login"} className='text-Blue'>Login</NavLink></h2>
                </form>
            </div>
        </div >
    )
}

export default Signup