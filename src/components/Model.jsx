import React, { useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'

const Model = ({ _this }) => {

    const [addManeyData, setAddManeyData] = useState({
        amount: 0,
        remark: ""
    })

    return (
        <div className={`fixed w-screen h-screen -translate-x-1/2 -translate-y-1/2 bottom-0 left-1/2 right-0 top-1/2 ${_this.showAddMoneyModel ? "flex items-center justify-center overflow-hidden" : "hidden"} backdrop-blur-[3px] bg-white/10 transition-all`}

            onClick={_this.handleCloseMoneyModel}
            id='moneyModel'
        >
            <div className='relative grid place-items-center sm:w-[400px] w-full h-[300px] mx-4 p-4 bg-slate-400 rounded'>
                <button className='absolute right-1 top-1'
                    onClick={_this.handleShowMoneyModel}
                ><RiCloseFill className='text-3xl' /></button>

                <div className='flex flex-col gap-3 w-[80%] max-h-full'>
                    <input type="number" placeholder='Enter amount here..'
                        value={addManeyData.amount}
                        onChange={(e) => {
                            setAddManeyData({
                                ...addManeyData,
                                amount: parseFloat(e.target.value),
                            })
                        }}
                        className='block outline-none text-black w-full py-[0.3rem] px-2 rounded' />
                    <div className='flex flex-col'>
                        <label htmlFor="remark" className='text-gray-500'>Optional</label>
                        <textarea type="text" name='remark' placeholder='Remark..'
                            value={addManeyData.remark}
                            onChange={(e) => {
                                setAddManeyData({
                                    ...addManeyData,
                                    remark: e.target.value,
                                })
                            }}
                            className='block outline-none text-black w-full py-[0.3rem] px-2 rounded' />
                    </div>
                    <button
                        className='bg-blue-700 ml-auto mr-0 text-white max-w-fit py-[0.4rem] px-4 rounded font-medium hover:bg-blue-500 transition-all duration-300'

                        onClick={() => {
                            _this.handleAddMoney_btn(addManeyData)
                        }}
                    >
                        Add Money
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Model