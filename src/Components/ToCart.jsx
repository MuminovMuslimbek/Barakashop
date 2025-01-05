import React, { useContext, useEffect } from 'react';
import Cart from '../assets/images/cart.png';
import CartWhite from '../assets/images/cart_white.png';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../App';

function ToCart() {
    const cart = useSelector(state => state.cart || []);
    const { theme } = useContext(ThemeContext)
    const [count, setCount] = useState(0);
    const navigate = useNavigate()

    useEffect(() => {
        let sum = 0;
        cart.forEach(value => {
            sum += Number(value.count || 0);
        });
        setCount(sum);
    }, [cart]);

    return (
        <div onClick={() => { navigate('/cart'); }} className={`right-3 z-40 bottom-3 fixed flex justify-center items-center bg-black dark:bg-white shadow-lg p-2 rounded-[20px] cursor-pointer ${count > 0 ? 'block' : 'hidden'}`} >
            <span className="top-[5px] right-[5px] absolute flex justify-center items-center bg-white dark:bg-black rounded-full w-4 h-4 font-bold text-[10px] text-black dark:text-white"> {count} </span>
            <img src={theme == 'light' ? CartWhite : Cart} alt="Cart" className="w-10 h-10" />
        </div>

    );
}

export default React.memo(ToCart);
