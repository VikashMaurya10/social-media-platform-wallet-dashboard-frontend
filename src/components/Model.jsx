import React, { useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'

const Model = ({ _this }) => {

    const [addManeyData, setAddManeyData] = useState({
        amount: 0,
        remark: "",
        transactionType: _this.btnType == "Add Money" ? "deposit" : _this.btnType == "send Money" ? "cradit" : ''
    })

    return (
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
                    setAddManeyData({
                        amount: 0,
                        remark: '',
                        transactionType: ""
                    })
                }}
            >
                {_this.btnType}
            </button>
        </div>

    )
}

export default Model