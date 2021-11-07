import React, {useEffect, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper';
import './carditem.scss';
import bookApi from '../../api/bookApi';


function CardItem(props) {
  const { data } = props;
  const volumeInfo = data.volumeInfo || "";
  const imageLinks = volumeInfo.imageLinks || "";
  const thumbnail = imageLinks.thumbnail || "";
  console.log("datatttta", data);
  return (
    <div className="carditem">
      <div className="carditem-poster">
        <img src={thumbnail} alt="" />
      </div>
      <div className="carditem-content">
        <div className="carditem-content-title">{volumeInfo.title}</div>
        <div className="carditem-content-author">{`by ${
          volumeInfo.authors ? volumeInfo.authors[0] : ""
        }`}</div>
        <div className="carditem-content-description">
          {volumeInfo.description}
        </div>
        <a href={volumeInfo.infoLink} target="_blank" rel="noreferrer">
          <button>See The Book</button>
        </a>
      </div>
    </div>
  );
}

export default CardItem;
