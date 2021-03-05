import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className='home__container'>
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/jan/Blockbuster_entertainment/EN/3000x1200_Hero-Tall_NP._CB660702447_.jpg" alt="">
                    
                </img>
            </div>
            <div className="home__row">
                <Product id={1234} title='Acer Swift 3 10th Gen Core i5 14-inch Ultra Thin and Light Laptop (8GB/512GB SSD/Windows 10/Steel Gray/NVIDA GeForce MX350/1.19kg), SF314-57' price={59999} image='https://images-eu.ssl-images-amazon.com/images/I/41OKH-uGRHL._AC_US160_FMwebp_QL70_.jpg' rating={5}
                />
                <Product id={1234} title='Sony SRS-XB23 Wireless Extra Bass Bluetooth Speaker with 12 Hours Battery Life, Party Connect, Waterproof, Dustproof, Rustproof, Speaker with Mic, Loud Audio for Phone Calls (Blue)' price={7990} image='https://images-na.ssl-images-amazon.com/images/I/81aQlDDO%2BiL._SX679_.jpg' rating={5}
                />
                <Product id={1234} title='OnePlus Band : Smart Everywear : 1.1” AMOLED Display, Dual-Color Band Design, Continuous Blood Oxygen Saturation Monitoring (Sp02), 5ATM + IP68 Water & Dust Resistant' price={2499} image='https://images-na.ssl-images-amazon.com/images/I/61XPTRJZcCL._SX679_.jpg' rating={5}
                />
            </div>
            <div className="home__row">
                <Product id={1234} title='OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)' price={39999} image='https://images-na.ssl-images-amazon.com/images/I/71KJ3loLvyL._SX679_.jpg' rating={5}
                />
                <Product id={1234} title='JBL C115TWS True Wireless Headphone with Built-in Mic, 21 Hours Combined Playtime, Dual Connect and Bluetooth 5.0 (Red' price={2999} image='https://images-na.ssl-images-amazon.com/images/I/61Qcuun35BL._SL1500_.jpg' rating={5}
                />
                <Product id={1234} title='New Apple iPhone 11 Pro with Apple MA13 Chip - Silver (Latest Model)' price={61990} image='https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SX679_.jpg' rating={5}
                />
            </div>
            <div className="home__row">
                <Product id={1234} title='Samsung 80 cm (32 inches) Wondertainment Series HD Ready LED Smart TV UA32TE40AAKXXL (Titan Gray) (2020 model)' price={47999} image='https://images-na.ssl-images-amazon.com/images/I/71hk35dbxoL._SX679_.jpg' rating={5}
                />
                <Product id={1234} title='VSK Bean Bag XXXL Sofa Mudda Cover Black (Without Beans) Cover only' price={2999} image='https://images-na.ssl-images-amazon.com/images/I/51QO4iATxCL._SX679_.jpg' rating={5}
                />
                <Product id={1234} title='Infinity (JBL) Glide 500 Wireless Headphones with 20 Hours Playtime (Quick Charge), Deep Bass and Dual Equalizer (Charcoal Black)' price={4999} image='https://images-na.ssl-images-amazon.com/images/I/71CM0FCo3BL._SX679_.jpg' rating={5}
                />
            </div>
        </div>
    )
}

export default Home
