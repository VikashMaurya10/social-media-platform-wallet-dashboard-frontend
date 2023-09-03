import React from 'react'

const Transections = ({ _this }) => {

    const convertToIndianTime = (timestamp) => {
        const indianDate = new Date(timestamp).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
        return indianDate;
    }
    return (
        <div className='w-full overflow-x-scroll '>
            <table className='w-full'>
                <thead>
                    <tr className='text-White'>
                        <th>Serial No.</th>
                        <th>Amount</th>
                        <th>Transaction Type</th>
                        <th>Remark</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody className='w-full'>
                    {
                        _this.transections?.map((value, i) => {
                            const { amount, transactionType, remark, updatedAt } = value
                            return (
                                <tr key={i} className={`${transactionType == 'deposit' ? 'bg-green-900/30' : transactionType == "cradit" ? 'bg-red-900/30' : ""} text-White d-flex justify-between items-center text-center`}>
                                    <td>{i + 1}.</td>
                                    <td>{amount}</td>
                                    <td>{transactionType}</td>
                                    <td className='text-left'>{remark}</td>
                                    <td>{convertToIndianTime(updatedAt)}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Transections