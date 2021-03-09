import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">

                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Naqia_DW/2_1500_x_300.jpg" alt="" />

                <div className="home_row">
                    <Product id="1231" title="Panasonic 1.5 Ton 5 Star Wi-Fi Twin Cool Inverter Split AC (White)" price={44999} image="https://images-na.ssl-images-amazon.com/images/I/51zhvnS9jVL._SL1500_.jpg" rating={4} />
                    <Product id="1232" title="Voltas 1.4 Ton 5 Star Inverter Adjustable Split AC (White)" price={34999} image="https://images-na.ssl-images-amazon.com/images/I/413%2BMNEA1EL._SL1000_.jpg" rating={4} />

                </div>
                <div className="home_row">
                    <Product id="1233" title="VSanyo 1 Ton 5 Star Inverter Split AC (White)" price={34999} image=" https://images-na.ssl-images-amazon.com/images/I/51Kf9sewAUL._SL1500_.jpg" rating={4} />
                    <Product id="1234" title="LG 1.5 Ton 5 Star Inverter Split AC" price={34999} image="https://images-na.ssl-images-amazon.com/images/I/51lyOjfKhML._SL1500_.jpg" rating={4} />
                    <Product id="1235" title="Voltas 1.4 Ton 5 Star Inverter Adjustable Split AC (White)" price={34999} image="https://images-na.ssl-images-amazon.com/images/I/413%2BMNEA1EL._SL1000_.jpg" rating={4} />


                </div>
                <div className="home_row">
                    <Product id="1236" title="VSanyo 1 Ton 5 Star Inverter Split AC (White)" price={30999} image="https://images-na.ssl-images-amazon.com/images/I/413%2BMNEA1EL._SL1000_.jpg" rating={4} />
                </div>
            </div>

        </div>
    )
}

export default Home
