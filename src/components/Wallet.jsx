import React, { useState } from 'react'
import walletImg from "../assets/wallet.png"
import BlueWalletImg from "../assets/walletBlue.png"
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { VscSend } from 'react-icons/vsc'
import { PiArrowFatLinesDownFill } from 'react-icons/pi'
import { RiCloseFill } from 'react-icons/ri'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Wallet = ({ _this }) => {
  const [showBaln, setShowBlan] = useState(true)
  const [showAddMoneyModel, setshowAddMoneyModel] = useState(false)

  const [addManeyData, setAddManeyData] = useState({
    amount: "",
    remark: ''
  })

  const Navigate = useNavigate()

  const handleShowBlan = () => {
    setShowBlan(!showBaln)
    _this.isAuthurized()
  }

  const handleShowMoneyModel = () => {
    setshowAddMoneyModel(!showAddMoneyModel)
  }

  const handleCloseMoneyModel = (e) => {
    if (e.target.id === "moneyModel") setshowAddMoneyModel(false)
  }

  const handleAddManeyData = (e) => {
    const { name, value } = e.target
    setAddManeyData({
      ...addManeyData, [name]: value
    })
  }

  const handleAddMoney_btn = (addManeyData) => {
    const isAmount = addManeyData.amount.trim()
    if (!isAmount) return toast.warn("amount can't be empty ")
    if (Math.sign(isAmount) == 0) return toast.warn("amount can't be zero ")
    if (Math.sign(isAmount) == -1) return toast.warn("amount can't Negative")
    _this.updateWallet(addManeyData)
    setshowAddMoneyModel(!showAddMoneyModel)
    setAddManeyData({
      amount: "",
      remark: ''
    })
  }

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-8'>
      <div className='h-[150px] grid place-items-center bg-Gray text-White rounded-lg  p-3 text-center hover:bg-LightGray transition-colors duration-300'>
        <div className='flex items-center gap-4'>
          <h1 className=''>Total Balance </h1>
          {showBaln ?
            <AiOutlineEye className='text-xl cursor-pointer'
              onClick={handleShowBlan}
            />
            :
            <AiOutlineEyeInvisible className='text-xl cursor-pointer'
              onClick={handleShowBlan}
            />}
        </div>
        <h1 className='h-8 text-center'>
          {
            showBaln ? _this.userData.balance : <></>
          }
        </h1>
      </div>

      <div className='group grid place-items-center bg-Gray h-[150px] text-White rounded-lg cursor-pointer p-3 text-center hover:bg-LightGray transition-colors duration-300'
        onClick={handleShowMoneyModel}
      >
        <div>
          <img className='block m-auto group-hover:hidden' src={walletImg} alt="loading.." />
          <img className='hidden m-auto w-[4rem] group-hover:block' src={BlueWalletImg} alt="loading.." />
          <p>Add money to wallet</p>
        </div>
      </div>

      <div className='group grid place-items-center bg-Gray h-[150px] text-White rounded-lg cursor-pointer p-3 text-center hover:bg-LightGray 
      transition-colors duration-300'
        onClick={() => {
          Navigate("/comming-soon")
        }}
      >
        <div>
          <VscSend className='block m-auto mb-3 text-4xl -rotate-[25deg] group-hover:text-Blue transition-colors' />
          <p>Send money</p>
        </div>
      </div>

      <div className='group grid place-items-center bg-Gray h-[150px] text-White rounded-lg cursor-pointer p-3 text-center hover:bg-LightGray transition-colors duration-300'
        onClick={() => {
          Navigate("/comming-soon")
        }}
      >

        <div>
          <PiArrowFatLinesDownFill className='block m-auto mb-3 text-[2.5rem] group-hover:text-Blue transition-colors' />
          <p>receive money</p>
        </div>
      </div>

      {/* add money to wallet model */}
      <div className={`absolute w-screen min-h-screen inset-0 ${showAddMoneyModel ? "flex items-center justify-center" : "hidden"} backdrop-blur-[3px] bg-white/10 transition-all`}
        onClick={handleCloseMoneyModel}
        id='moneyModel'
      >
        <div className='relative grid place-items-center w-[400px] h-[300px]  p-4 bg-slate-400 rounded'>
          <button className='absolute right-1 top-1'
            onClick={handleShowMoneyModel}
          ><RiCloseFill className='text-3xl' /></button>

          <div className='flex flex-col gap-3 w-[80%] max-h-full'>
            <input type="number" name='amount' placeholder='Enter amount here..'
              value={addManeyData.amount}
              onChange={handleAddManeyData}
              className='block outline-none text-black w-full py-[0.3rem] px-2 rounded' />
            <div className='flex flex-col'>
              <label htmlFor="remark" className='text-gray-500'>Optional</label>
              <textarea type="text" name='remark' placeholder='Remark..'
                onChange={handleAddManeyData}
                value={addManeyData.remark}

                className='block outline-none text-black w-full py-[0.3rem] px-2 rounded' />
            </div>
            <button
              className='bg-blue-700 ml-auto mr-0 text-white max-w-fit py-[0.4rem] px-4 rounded font-medium hover:bg-blue-500 transition-all duration-300'

              onClick={() => {
                handleAddMoney_btn(addManeyData)
              }}
            >
              Add Money
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Wallet