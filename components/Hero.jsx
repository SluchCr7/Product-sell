'use client'
import React from 'react'
import { data } from '../data'
// import Image from 'next/image'
import Card from './Card'
import { Hidden } from '@mui/material'
import Confirm from './Confirm'

const Hero = () => {
    const [isempty, setisempty] = React.useState(true)
    const [isActive, setisActive] = React.useState(false)
    const [isNum, setisNum] = React.useState(0)
    const [elements, setElements] = React.useState([])
    // const [count, setCount] = React.useState()
    const [total, setTotal] = React.useState(0)
    const [check, setCheck] = React.useState(false)
    const [ActiveCl, setActiveCl] = React.useState(false)
    const [cancel, setCancel] = React.useState(false)
    const HandleActive = () => {
        setisActive(true)
        setisempty(false)
        setisNum(isNum + 1)
    }

    const handleCancel = (e) => {
        if (isNum == 1) {
            setisempty(true)
        }
        else {
            e.target.parentElement.remove()
            setisNum(isNum - 1)
            setTotal(total - e.target.parentElement.children[0].children[1].children[1].children[1].children[1].innerHTML)
            console.log(isNum)
        }
    }
    return (
      <>
        <div className={`w-full min-h-[100vh] pt-24 ${check ? "opacity-50 pointer-events-none" : "opacity-100 pointer-events-auto"}`}>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center xl:flex-row xl:items-start gap-[30px]'>
                    <div className='flex flex-col items-center xl:items-start w-[100%] xl:w-[70%]'>
                        <h1 className='text-3xl font-extrabold'>Desserts</h1>
                        <div className='grid grid-cols-1 xl:grid-cols-3 gap-7'>
                            {
                                data.map((item, index) => {
                                    return (
                                        <Card setTotal={setTotal} count={item.count} total={total} setEle={setElements} ele={elements} Num={isNum} clickNum={setisNum} empty={setisempty} onClick={HandleActive} Active={isActive} count={item.count} key={index} name={item.name} image_ds={item.image_ds} price={item.price} category={item.category} img_mp={item.image_mo} img_th={item.image_th} img_ta={item.image_ta} id="CardSec" NewPrice={item.NewPrice}  />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='menu bg-white p-4 w-[100%] rounded-lg xl:w-[30%]'>
                        <span className='text-xl font-extrabold text-rose-400 uppercase'>You  Cart (<span className='text-rose-500 num'>{isNum}</span>)</span>
                        {
                            isempty
                                ?
                                <div className='flex flex-col items-center'>
                                    <img src="/illustration-empty-cart.svg" alt="image-empty-cart" />
                                    <span className='text-sm font-extrabold text-rose-400 uppercase tracking-[3px]'>Your cart is empty</span>
                                </div>
                                :
                                <div className='flex flex-col items-center'>
                                    <div className='items flex flex-col items-start mt-5 w-full gap-2' id="cartEle">
                                        {
                                            elements.map((item, index) => {
                                                return (
                                                <div key={index} className={`flex items-center gap-5 w-full justify-between`}>
                                                    <div className='flex flex-col items-start gap-1'>
                                                        <span className='text-xl font-extrabold text-red'>{item.name}</span>
                                                        <div className='flex items-center gap-1'> 
                                                            <span className='text-sm font-extrabold text-rose-500'><span className='text-rose-400'>{item.count}</span>x</span>
                                                            <div className='flex items-center gap-3 ml-3'>
                                                                <span className='text-base font-extrabold text-rose-400 flex items-center gap-1'><span>@</span>${item.price}</span>
                                                                <span className='text-base font-extrabold text-green'><span>$</span><span>{item.NewPrice}</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <img src={item.img} onClick={handleCancel} className='w-[20px] h-[20px]' alt="icon-delete" />
                                                </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex items-center gap-3 mt-5 justify-between w-full border-t-[1px] py-[10px] border-[#E5E5E5]'>
                                        <span className='text-xl font-extrabold text-rose-400 uppercase'>Total</span>
                                        <span className='text-3xl font-extrabold text-green'>${total}</span>
                                    </div>
                                    <button className={`w-full mt-2 bg-rose-500 text-white py-4 rounded-md`} onClick={()=> setCheck(true)}>Checkout</button>
                                </div>
                            }
                    </div>
                </div>
            </div>
        </div>
        <Confirm cancel={handleCancel} check={check} Activeclass={ActiveCl} setActiveCl={setActiveCl} setCheck={setCheck} elements={elements} setElements={setElements} total={total} setisempty={setisempty} />
    </>
  )
}

export default Hero