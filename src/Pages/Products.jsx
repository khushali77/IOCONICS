import React, { useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Button} from "react-bootstrap";
import {Table} from 'react-bootstrap';
import "../Css/products.css";
import s1 from "../Assets/kelloggs.png";
import s2 from "../Assets/almonds.png";
import Slider from "react-slick";

function Products(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <div className="products">
            <div className="leftPanel">

                <div className="hamburger">
                    <Button variant="light" onClick={handleShow} className="hamButton"><img alt="menu" src="https://img.icons8.com/material-outlined/24/000000/menu.png"/></Button>
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                        <Offcanvas.Title>IOCONICS</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                        Side Menu
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>

                <div className="perProduct">
                    <img src={s1} alt="your product" className="perProdImg"/>
                    <div className="perProdDesc">
                        <h3>Kelloggs Corn Flakes Cereals, Gluten Free | 650g</h3>
                        <p>High in Iron, vitamin B1, B2, B3, B6, C and a source of Vitamin B12 and Folate.</p>
                        <div className="amount">
                            <p>Qty</p>
                            <p>Price</p>
                            <h3>1</h3>
                            <h3>Rs.420.00</h3>
                        </div>
                    </div>
                </div>

                <div className="pluButton">
                    <Button variant="secondary">Enter PLU</Button>
                </div>

                <div className="discCarousel">
                    <h2 className="discProds">Discount on Products</h2>
                    <Slider {...settings}>
                        <div className="discItem">
                            <div className="discLeft">
                                <img src={s2} className="discImg" alt="product"></img>
                            </div>
                            <div className="discRight">
                                <p> Rostaa Premium Classic Almonds Value Pack, 1000 g</p>
                                <div className="discPrice">
                                <span className="striked"><p>Price: </p></span>
                                <span className="striked"><h4>Rs. 860.00</h4></span>
                                <p>Price: </p>
                                <h4>Rs. 540.00</h4>
                                </div>
                            </div>
                        </div>
                        <div className="discItem">
                            <div className="discLeft">
                                <img src={s2} className="discImg" alt="product"></img>
                            </div>
                            <div className="discRight">
                                <p> Rostaa Premium Classic Almonds Value Pack, 1000 g</p>
                            </div>
                        </div>
                        <div className="discItem">
                            <div className="discLeft">
                                <img src={s2} className="discImg" alt="product"></img>
                            </div>
                            <div className="discRight">
                                <p> Rostaa Premium Classic Almonds Value Pack, 1000 g</p>
                            </div>
                        </div>
                        <div className="discItem">
                            <div className="discLeft">
                                <img src={s2} className="discImg" alt="product"></img>
                            </div>
                            <div className="discRight">
                                <p> Rostaa Premium Classic Almonds Value Pack, 1000 g</p>
                            </div>
                        </div>
                    </Slider>

                </div>

                <div className="subtotal">
                    <p>Qty</p>
                    <p>Price</p>
                    <h2>4</h2>
                    <h2>Rs. 1048.00</h2>
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
                </tbody>
                 </Table>
                </div>
                <Button variant="success">Checkout</Button>
            </div>
        </div>
    );
}

export default Products;
