import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import { toast } from 'react-toastify';

const Home = () => {
    const tShirts = useLoaderData();
    // console.log(tShirts)

    const [cart, setCart] = useState([]);

    // buy now button event handler
    const handleAddtoCart = tShirt =>{
        const exist = cart.find(ts => ts._id === tShirt._id);
        if(exist){
            toast("You can't buy product more than one!!",{position:"top-center"})
        }
        else{
            const newCart = [...cart, tShirt];
            setCart(newCart);
        }
        
    }
    
    // cross icon button event handler
    const handleCartRemoveButton = id =>{
        const remaining = cart.filter(tshirt => tshirt._id !==id);
        setCart(remaining);
    }

    return (
        <div className="home-container grid md:grid-cols-3 bg-slate-100 py-12 gap-4 px-12 mx-auto">
            <div className='shop-container md:col-span-2 grid md:grid-cols-3 gap-4'>
                {
                    tShirts.map(tShirt => <Tshirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddtoCart={handleAddtoCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container px-12">
                <Cart
                    cart={cart}
                    handleCartRemoveButton={handleCartRemoveButton}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;