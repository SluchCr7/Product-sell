import React from 'react'
const Card = ( props) => {
    const [isActive, setisActive] = React.useState(false)
    const [ActiveCl , setActiveCl] = React.useState(false)
    const [count, setCount] = React.useState(1)
    const handlePlus = () => {
        setCount(count + 1)
        // props.count + 1
    }
    const handleMinus = () => {
        if (count == 0) {
            count == 0
        }
        else {
            setCount(count - 1)
            console.log(count)
        }

    }
    const HandleActive = () => {
        // props.setClass(true)
        props.empty(false)
        props.clickNum(props.Num + 1)
        setActiveCl(true)
        setisActive(true)
        // Set previous price + next price to total
        props.setTotal(props.price + [...props.ele].reduce((acc, item) => acc + item.NewPrice, 0))
        props.setEle([
            {
                // Set number of item to count in cart
                name: props.name,
                price: props.price,
                count : props.count ,
                img: "/icon-remove-item.svg",
                img_ds : props.image_ds,
                NewPrice: props.price * count,
            }
            , ...props.ele
        ])
    }
    return (
        <div key={props.name} className='p-4 w-[100%] rounded-lg m-[1rem]' id={props.id}>
            <div className='flex relative items-center'>
            <img className={`w-[100%] rounded-lg ${ActiveCl ? "border-[3px] border-red" :""}`} src={props.image_ds} alt={props.name} />
                {
                    (isActive)
                    ?
                    <button className='absolute bottom-[-1rem] left-0 right-0 flex items-center gap-3 bg-red p-3 justify-between w-[50%] mx-auto rounded-xl'>
                        <span onClick={handleMinus} className='text-base font-extrabold text-white border-[1px] border-white px-2 rounded-full hover:bg-white hover:text-red transition-all duration-500'>-</span>
                        <span className='text-sm font-extrabold text-white'>{count}</span>
                        <span onClick={handlePlus} className='text-base font-extrabold text-white border-[1px] border-white px-2 rounded-full hover:bg-white hover:text-red transition-all duration-500'>+</span>
                    </button>
                    :
                    <button onClick={HandleActive} className='absolute bottom-[-1rem] left-0 right-0 flex items-center gap-3 bg-white p-3 justify-center w-[50%] mx-auto rounded-xl'>
                        <img src="/icon-add-to-cart.svg" alt="icon-cart" />
                        <span className='text-sm font-extrabold text-green'>Add To Cart</span>
                    </button>
                }
            </div>  
            <div className='flex flex-col items-start gap-2 mt-5 mb-3'>
                <span className='text-sm text-rose-300'>{props.category}</span>
                <span className='text-xl font-extrabold'>{props.name}</span>
                <span className='text-xl font-extrabold text-rose-400'>${props.price}</span>
            </div>
        </div>
    )
}

export default Card