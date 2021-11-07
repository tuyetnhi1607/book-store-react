import React, {useEffect, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper';
import './cardbanner.scss';
import bookApi from '../../api/bookApi';


function CardBanner(props) {
  const { data } = props;
  const volumeInfo = data.volumeInfo || "";
  const imageLinks = volumeInfo.imageLinks || "";
  const thumbnail = imageLinks.thumbnail || "";
  console.log("datatttta", data);
  return (
    <div className="container">
      <div className="container-poster">
        <img src={thumbnail} alt="" />
      </div>
      <div className="container-content">
        <div className="container-content-title">{volumeInfo.title}</div>
        <div className="container-content-author">{`by ${
          volumeInfo.authors ? volumeInfo.authors[0] : ""
        }`}</div>
        <div className="container-content-description">
          {volumeInfo.description}
        </div>
        <a href={volumeInfo.infoLink} target="_blank" rel="noreferrer">
          <button>See The Book</button>
        </a>
      </div>
    </div>
  );
}

export default CardBanner;
