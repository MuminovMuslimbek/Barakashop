import React, { useContext, useState, useEffect } from 'react';
import Cart from '../assets/images/cart.png';
import CartWhite from '../assets/images/cart_white.png';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../App';

function ToCart() {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('count')) || [];
        const total = storedCart.reduce((acc, item) => acc + item.quantity, 0);
        setTotalCount(total);
    }, []);

    return (
        <div onClick={() => { navigate('/cart'); }} className={`right-3 z-40 bottom-3 fixed flex justify-center items-center bg-black dark:bg-white shadow-lg p-2 rounded-[20px] cursor-pointer ${totalCount === 0 ? 'hidden' : 'block'}`} >
            <span className="top-[5px] right-[5px] absolute flex justify-center items-center bg-white dark:bg-black rounded-full w-4 h-4 font-bold text-[10px] text-black dark:text-white"> {totalCount} </span>
            <img src={theme === 'light' ? CartWhite : Cart} alt="Cart" className="w-10 h-10" />
        </div>
    );
}

export default React.memo(ToCart);
