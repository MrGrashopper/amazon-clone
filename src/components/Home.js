import React from 'react';
import '../styles/Home.scss';
import Product from "./Product";

function Home() {
    return (
        <div className="home">
           <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/gateway/placement/launch/LolLastOneLaughing/LOLD_S1_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500X600_PV_de-DE._CB655770811_.jpg" alt=""/>
           
           <div className="home__row">
                <Product 
                    id={1}
                    title="the lean startuewp" 
                    price={19.99}  
                    image="https://m.media-amazon.com/images/I/31QmDBo4X9L._AC_SY200_.jpg" 
                    rating={2}
                />
                <Product 
                    id={2}
                    title="the lean startup" 
                    price={9.99}  
                    image="https://m.media-amazon.com/images/I/41L+G2p7efL._AC_SY200_.jpg" 
                    rating={3}
                />
           </div>

           <div className="home__row">
                <Product 
                    id={3}
                    title="the lfwean startup" 
                    price={39.99}  
                    image="https://m.media-amazon.com/images/I/41tOXUWa6dL._AC_SY200_.jpg" 
                    rating={5}
                />
                <Product 
                    id={4}
                    title="the leanfw startup" 
                    price={2.99}  
                    image="https://images-eu.ssl-images-amazon.com/images/G/03/UK-hq/2021/img/Amazon_Basics/XCM_CUTTLE_1308569_1575441_DE_3674413_186x116_1X_en_GB._SY116_CB659782638_.jpg" 
                    rating={2}
                />
                <Product 
                    id={5}
                    title="the leafwen startup" 
                    price={29.99}  
                    image="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/ku/new/recent/GW/DE_KU_GW_Catcarddesktop_379x304-April2021._SY304_CB655882339_.jpg" 
                    rating={5}
                />
                <Product 
                    id={6}
                    title="the le2afwen startup" 
                    price={29.99}  
                    image="https://images-eu.ssl-images-amazon.com/images/G/03/UK-hq/2021/img/Amazon_Basics/XCM_CUTTLE_1308697_1575867_DE_3675376_379x304_1X_en_GB._SY304_CB659579760_.jpg" 
                    rating={4}
                />                                                
           </div>

           <div className="home__row">
           
           </div>           
           </div> 
        </div>
    )
}

export default Home
