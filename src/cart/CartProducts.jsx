import React from 'react';


const CartProducts = () => {
    
	
	const ShowProduct = JSON.parse(localStorage.getItem("ArrayOfProducts"));
	return ((ShowProduct.map((item)=>(
   <tr>
   <td class="cart_product">
	   <a href=""><img src={item[0]} alt="" /></a>
   </td>
   <td class="cart_description">
	   <h4><a href="">{item[1]}</a></h4>
	   <p>Web ID: 1089772</p>
   </td>
   <td class="cart_price">
	   <p>${item[2]}</p>
   </td>
   <td class="cart_quantity">
	   <div class="cart_quantity_button">
		   <a class="cart_quantity_up" href=""> + </a>
		   <input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2" />
		   <a class="cart_quantity_down" href=""> - </a>
	   </div>
   </td>
   <td class="cart_total">
	   <p class="cart_total_price">${item[2]}</p>
   </td>
   <td class="cart_delete">
	   <a class="cart_quantity_delete" href=""><i class="fa fa-times"></i></a>
   </td>
   </tr>
	))))
}
export default CartProducts;
