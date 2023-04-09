import React from 'react';
import './Cart.css';

const Cart = ({cart, handleCartRemoveButton}) => {
    // condition rendering 
    let message;
    if(cart.length===0){
        message = <p className='pink'>Please Buy Some Products</p>
    }
    else{
        message = <div>
            <h4>Borolox !!!</h4>
            <p>Thanks for buying Products!!</p>
        </div>
    }
    
    return (
        <div className='sticky top-0'> 
            <div className="text-center">
                <h1 className={`text-4xl mt2 font-bold mb-6 ${cart.length===0 ? 'red' : ''}`}>Selected Item {cart.length}</h1>
                {/* ternary operator */}
                {cart.length > 2 ? <span>Dui tar besi product kintu hoye geche</span> : cart.length === 2 ? <span>Dui ta product kintu hoye geche</span> : <span> Dui tar kom</span>} 
                {message}
                {/* && operator  */}
                {
                    cart.length===1 && <p className={ cart.length===1 ? 'skyblue' : ''}>It is happened when && operator is true</p>
                }
                {/* || operator  */}
                {
                    cart.length===4 || <p className={cart.length ===3 ? 'pink' : 'red'}>Akhane 4 diye or operator set kora ache.</p>
                }
                
            </div>
            
            {
                cart.map(tshirt => <p
                    key={tshirt._id} className='text-xl' 
                >{tshirt.name}
                  <button onClick={()=>handleCartRemoveButton(tshirt._id)} className='ml-8 bg-red-600 px-3 rounded-lg text-white py-2'> X </button>
                </p>)
            }
        </div>
    );
};

export default Cart;