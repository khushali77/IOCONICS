import React from "react";
import "../Css/product.css";
import s1 from "../Assets/kelloggs.png";
import s2 from "../Assets/almonds.png";
import {Table} from 'react-bootstrap';
import Slider from "react-slick";

function Product(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <div className="product">
            <div className="leftPanel">
                <div className="productInfo">
                    <h2 className="productTitle">Kellogg's cornflakes Cereals, Gluten Free | 650g Pack</h2>
                    <div className="productDetails">
                        <img src={s1} className="productImg" alt="product"></img>
                        <div>
                            <p>High in Iron, Vitamin B1, B2, B3, B6, C and a source of Vitamin B12 and Folate</p>
                            <div className="qtyDetails">
                                <p>Qty</p>
                                <p>Price</p>
                                <h2>1.00</h2>
                                <h2>Rs. 560</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="plu">
                    <button className="pluButton">Enter PLU</button>
                </div>

                <div className="discCarousel"> 
                <h2> Discount on Products</h2>
                    <Slider {...settings}>
                    <div className="discItem">
                       <div className="discLeft">
                            <img src={s2} className="discImg" alt="product"></img>
                        </div>
                        <div className="discRight">
                            <p> Rostaa Premium Classic Almonds Value Pack, 1000 g</p>
                        </div>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    </Slider>
                </div>
            </div>
            

            <div className="rightPanel">
                <h2 className="titleList">IOCONICS Shopping List</h2>
                <div className="productsList">
                <Table responsive>
                <thead>
                <tr>
                    <th>Item name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Kelloggs Corn Flakes</td>
                    <td>1</td>
                    <td>Rs. 420.00</td>
                </tr>
                <tr>
                    <td>Loreal Paris Shampoo</td>
                    <td>2</td>
                    <td>Rs. 530.00</td>
                </tr>
                <tr>
                    <td>Maggi Tomato Ketchup</td>
                    <td>1</td>
                    <td>Rs. 98.00</td>
                </tr>
                <tr>
                    <td><span className="total">Total</span></td>
                    <td></td>
                    <td>Rs. 1048.00</td>
                </tr>
                </tbody>
            </Table>
                </div>
                <button className="checkout">Checkout</button>
            </div>
        </div>
    );
}

export default Product;