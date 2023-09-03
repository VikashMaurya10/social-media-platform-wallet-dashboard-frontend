import React, { useState } from 'react'
import walletImg from "../assets/wallet.png"
import BlueWalletImg from "../assets/walletBlue.png"
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { VscSend } from 'react-icons/vsc'
import { PiArrowFatLinesDownFill } from 'react-icons/pi'
import { RiCloseFill } from 'react-icons/ri'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Model from './Model'

const Wallet = ({ _this }) => {
  const Navigate = useNavigate()
  const [showBaln, setShowBlan] = useState(true)
  const [showAddMoneyModel, setshowAddMoneyModel] = useState(false)
  const [showModel1, setModel1] = useState(false)

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

  const handleShowModel1 = () => {
    setModel1(!showModel1)
  }

  const handleCloseModel1 = (e) => {
    if (e.target.id === "model1") setModel1(false)

  }

  const handleAddMoney_btn = (addManeyData) => {
    const isAmount = addManeyData.amount
    if (!isAmount) return toast.warn("amount can't be empty ")
    if (Math.sign(isAmount) == 0) return toast.warn("amount can't be zero ")
    if (Math.sign(isAmount) == -1) return toast.warn("amount can't Negative")
    // if (Math.sign(_this.userData.balance - isAmount) == -1) return toast.warn("can't be done")
    _this.updateWallet(addManeyData)
    showModel1 ? setModel1(!showModel1) : showAddMoneyModel ? setshowAddMoneyModel(!showAddMoneyModel) : <></>
  }

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-8'>
      <div className='h-[150px] grid place-items-center bg-Gray text-White rounded-lg  p-3 text-center hover:bg-LightGray transition-colors duration-300'>
        <div className='flex items-center gap-4 '>
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
        <h1 className={`h-8 text-center p-1 ${showBaln ? "" : "blur-sm w-full bg-white/10"}`}>
          {_this.userData.balance}
        </h1>
      </div>

      {/* disposit */}
      <div className='group grid place-items-center bg-Gray h-[150px] text-White rounded-lg cursor-pointer p-3 text-center hover:bg-LightGray transition-colors duration-300'
        onClick={handleShowMoneyModel}
      >
        <div>
          <img className='block m-auto group-hover:hidden' src={walletImg} alt="loading.." />
          <img className='hidden m-auto w-[4rem] group-hover:block' src={BlueWalletImg} alt="loading.." />
          <p>Add money to wallet</p>
        </div>
      </div>

      {/* withdrow */}
      <div className='group grid place-items-center bg-Gray h-[150px] text-White rounded-lg cursor-pointer p-3 text-center hover:bg-LightGray 
      transition-colors duration-300'
        onClick={handleShowModel1}
      >
        <div>
          <VscSend className='block m-auto mb-3 text-4xl -rotate-[25deg] group-hover:text-Blue transition-colors' />
          <p>Send money</p>
        </div>
      </div>

      {/* receive money */}
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
      <div className={`fixed w-screen h-screen -translate-x-1/2 -translate-y-1/2 bottom-0 left-1/2 right-0 top-1/2 ${showAddMoneyModel ? "flex items-center justify-center overflow-hidden" : "hidden"} backdrop-blur-[3px] bg-white/10 transition-all`}

        onClick={handleCloseMoneyModel}
        id='moneyModel'
      >
        <div className='relative grid place-items-center sm:w-[400px] w-full h-[300px] mx-4 p-4 bg-slate-400 rounded'>
          <button className='absolute right-1 top-1'
            onClick={handleShowMoneyModel}
          ><RiCloseFill className='text-3xl' /></button>
          <Model _this={{
            handleAddMoney_btn,
            btnType: 'Add Money'
          }} />
        </div>
      </div>

      {/* send money model */}
      <div className={`fixed w-screen h-screen -translate-x-1/2 -translate-y-1/2 bottom-0 left-1/2 right-0 top-1/2 ${showModel1 ? "flex items-center justify-center overflow-hidden" : "hidden"} backdrop-blur-[3px] bg-white/10 transition-all`}

        onClick={handleCloseModel1}
        id='model1'
      >
        <div className='relative grid place-items-center sm:w-[400px] w-full h-[300px] mx-4 p-4 bg-slate-400 rounded'>
          <button className='absolute right-1 top-1'
            onClick={handleShowModel1}
          ><RiCloseFill className='text-3xl' /></button>
          <Model _this={{
            handleAddMoney_btn,
            btnType: 'send Money'
          }} />
        </div>
      </div>
    </div>
  )
}

export default Wallet