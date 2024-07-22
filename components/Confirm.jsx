'use client'
import React from 'react'
import Image from 'next/image'
const Confirm = (props) => {
    const handleConfirm = () => {
        props.setActiveCl(false)
        props.setCheck(false)
        props.setElements([])
        props.setisempty(true)
        props.setisNum(0)
        props.setCancelCl(true)
    }
    return (
        <div className={`confirm w-[500px] bg-white shadow-xl p-6 ${props.check ? "flex" : "hidden"} flex-col items-start gap-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>
            <Image width={100} height={100} src="/icon-order-confirmed.svg" alt="icon-close" />
            <div className='flex flex-col items-start gap-2 my-3'>
                <h1 className='text-2xl font-extrabold text-accent-Rose500'>Your order is confirmed</h1>
                <p className='text-sm font-extrabold text-black'>We’ve accepted your order</p>
            </div>
            <div className='flex flex-col items-start gap-4 w-full bg-slate-100 p-4'>
                {
                    props.elements.map((item, index) => {
                        return (
                            <div className='flex items-center gap-5 w-full justify-between' key={index}>
                                <div className='flex flex-row items-start gap-3'>
                                    <Image width={50} height={50} src={item.img_ds} className='w-[50px] h-[50px]' alt="icon-delete" />
                                    <div className='flex flex-col items-start gap-1'>
                                        <span className='text-xl font-extrabold text-red'>{item.name}</span>
                                        <div className='flex items-center gap-1'>
                                            <span className='text-sm font-extrabold text-rose-500'><span className='text-rose-400'>{item.count}</span>x</span>
                                            <div className='flex items-center gap-3 ml-3'>
                                                <span className='text-base font-extrabold text-rose-400 flex items-center gap-1'><span>@</span>${item.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className='text-xl font-extrabold text-rose-400'>${item.price * item.count}</span>
                            </div>
                        )
                    })
                    
                }
            </div>
            <div className='flex items-center gap-3 mt-5 justify-between w-full border-t-[1px] py-[10px] border-[#E5E5E5]'>
                <span className='text-xl font-extrabold text-rose-400 uppercase'>Total</span>
                <span className='text-3xl font-extrabold text-green'>${props.total}</span>
            </div>
            <button className='w-full mt-2 bg-rose-500 text-white py-4 rounded-md' onClick={handleConfirm}>Checkout</button>
        </div>
  )
}

export default Confirm