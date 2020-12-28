import React, {useEffect, useState} from 'react'
import db from './firebase';
import './Home.css'
import Product from './Product'
import Offer from './Offer'


function Home() {

    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        db.collection('products').onSnapshot((snapshot) => {
            let tempProducts = []
            snapshot.docs.map((doc)=>{
                tempProducts.push({
                    id: doc.id,
                    product: doc.data()
                })
            })
            setProducts(tempProducts);
        })
    }, []);

    const [ offers, setOffers ] = useState([]);

    useEffect(() => {
        db.collection('offers').onSnapshot((snapshot) => {
            let tempOffers = []
            snapshot.docs.map((doc)=>{
                tempOffers.push({
                    id: doc.id,
                    offer: doc.data()
                })
            })
            setOffers(tempOffers);
        })
    }, []);

    return (
        <div className='Home'>
            <div className='Home-container'>
                <div className='Home-banner' style={{backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg)'}}>
                    
                </div>
                <div className='Home-content'>
                    <div className='Home-row'>
                    {
                        offers.map((offer)=> (
                            <Offer 
                                key={offer.id}
                                title={offer.offer.title}
                                image={offer.offer.image}
                                suggestion={offer.offer.suggestion}
                                link={offer.offer.link}
                            />
                        ))
                    }
                    </div>
                    <div className='Home-row'>
                    {
                        products.slice(0, 2).map((product)=> (
                            <Product 
                                key={product.id}
                                title={product.product.title}
                                price={product.product.price}
                                rating={product.product.rating}
                                image={product.product.image}
                            />

                        ))
                    }
                    </div>
                    <div className='Home-row'>
                    {
                        products.slice(2, products.length).map((product)=> (
                            <Product 
                                key={product.id}
                                title={product.product.title}
                                price={product.product.price}
                                rating={product.product.rating}
                                image={product.product.image}
                            />

                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
