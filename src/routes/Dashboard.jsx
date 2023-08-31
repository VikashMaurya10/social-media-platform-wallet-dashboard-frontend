import React, { useEffect, useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import Wallet from '../components/Wallet'
import Header from '../components/Header';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const Navigate = useNavigate()
    const base_URL = import.meta.env.VITE_BASE_URL
    const authToken = localStorage.getItem('authToken')
    const decodedToken = jwt_decode(authToken);

    const [userData, setUserData] = useState([])

    const isAuthurized = () => {
        if (authToken) {
            const expirationTimestamp = decodedToken.exp;
            const currentTimestamp = Math.floor(Date.now() / 1000);

            if (currentTimestamp >= expirationTimestamp) {
                localStorage.removeItem('authToken');
                toast.warn("Session Expired Please login again")
                Navigate("/login")
            }
        } else {
            Navigate("/login")
        }
    }

    const getUserData = async () => {
        await axios({
            method: 'post',
            url: `${base_URL}/dashboard/${decodedToken.id}`,
            headers: {
                'x-auth-token': authToken
            }
        }).then((res) => {
            setUserData(res?.data)
        }).catch((err) => {
            console.log(err);
        })
    }

    const updateWallet = async (data) => {
        await axios({
            method: 'put',
            url: `${base_URL}/dashboard/update/${decodedToken.id}`,
            headers: {
                'x-auth-token': authToken
            },
            data: data
        }).then((res) => {
            getUserData()
            toast.success("Succesfully added the money")
        }).catch((err) => {
            console.log(err);
            toast.error("Try after sometime")
        })
    }

    useEffect(() => {
        getUserData()
        isAuthurized()
    }, [])

    return (

        <>
            <Header />
            <main className='max-w-[90%] sm:max-w-[85%] mx-auto'>
                <Wallet
                    _this={{
                        userData,

                        isAuthurized,
                        getUserData,
                        updateWallet
                    }}
                />
            </main>
        </>
    )
}

export default Dashboard