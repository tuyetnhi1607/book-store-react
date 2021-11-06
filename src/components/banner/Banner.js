import React, {useEffect, useState} from 'react'
import CardBanner from '../card-banner/CardBanner'
import {Swiper, SwiperSlide} from 'swiper/react/swiper-react';
import './banner.scss';
import bookApi from '../../api/bookApi';
import "swiper/swiper.scss";

function Banner() {
    const [data, setData] = useState([]);
    useEffect(() =>{
        const getData = async () => {
            await bookApi.getList('graffiti')
            .then(response => setData(response.items))
            .catch(error =>{console.log(error);})
        }
        getData();
    }, [])
    console.log("data", data);
    return (
        <Swiper
        slidesPerView={(window.innerWidth / 500).toFixed(0)}
        >
            {data.map((item, i) => 
            <SwiperSlide key={i} className="background">
                <CardBanner data={item} />
            </SwiperSlide>
                
            )}
            
        </Swiper>
    )
}

export default Banner
