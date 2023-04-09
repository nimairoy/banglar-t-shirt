import React from 'react';

const Tshirt = ({tShirt, handleAddtoCart}) => {
    // console.log(tShirt)
    const {_id, name, picture, price} = tShirt;


    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-4 pt-6">
                <img src={picture} alt="tshirt" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <div className="card-actions">
                    <button onClick={()=>handleAddtoCart(tShirt)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tshirt;