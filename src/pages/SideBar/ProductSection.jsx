import React from 'react';
import SideBar from './SideBar';
import ProductProductDisplay from './ProductProductDisplay';
import ProductProductDisplayArray from './ProductProductDisplayArray';

const ProductSection = () => {
    return(
        <>
        <section id="advertisement">
		<div class="container">
			<img src="images/shop/advertisement.jpg" alt="" />
		</div>
	</section>
        <div class="container">
			<div class="row">
                <SideBar/>
                <div class="col-sm-9 padding-right">
				<div class="features_items">
				<h2 class="title text-center">Features Items</h2>
                {ProductProductDisplayArray.map((item,index)=>(
                 <ProductProductDisplay key={item.id} imgSrc={item.imgSrc} name={item.name} price={item.price}/>
                ))}
                </div>
					</div>

            </div>
        </div>
        </>
    );
}

export default ProductSection;