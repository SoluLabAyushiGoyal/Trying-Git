import React from 'react';
import CartProducts from '../../cart/CartProducts';
import {Link} from "react-router-dom";


const AryOfCart = (array) => {
    const temptArray = JSON.parse(localStorage.getItem("ArrayOfProducts"));
    temptArray.push(array);
    localStorage.setItem("ArrayOfProducts" , JSON.stringify(temptArray));
}


const HomeProducts = (props) => {
    const Array=[props.imgSrc ,props.name ,props.price]
    
    return(
        <>
    <div className="col-sm-4">
        
                    <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={props.imgSrc} alt="" />
                                        <h2>$56</h2>
                                        <p>{props.name}</p>
                                        <a href="#" className="btn btn-default add-to-cart" ><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                    </div>
                                    <div className="product-overlay">
                                        <div className="overlay-content">
                                            <h2>${props.price}</h2>
                                            <p>Easy Polo Black Edition</p>
                                            <button className="btn btn-default add-to-cart" onClick={()=>AryOfCart(Array)}><i className="fa fa-shopping-cart" ></i><Link to="/cart">Add to product</Link></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="choose">
                                    <ul className="nav nav-pills nav-justified">
                                        <li><a href="#"><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                                        <li><a href="#"><i className="fa fa-plus-square"></i>Add to compare</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
        </>
    );
}

export default HomeProducts;
