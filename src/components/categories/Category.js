import React, {useEffect, useState} from 'react'
import CardItem from '../card-item/CardItem'
import category from './category.scss';
import bookApi from '../../api/bookApi';
import 'boxicons';

const menuItems = [
  {
    name: "All Genre",
  },
  {
    name: "Business",
  },
  {
    name: "Science",
  },
  {
    name: "Fiction",
  },
  {
    name: "Biography",
  },
  {
    name: "Philosophy",
  },
];
function Category() {
  const [data, setData] = useState([]);
    
    const getData = async (e) => {
      const term =  e;
      await bookApi
        .getList(term)
        .then((response) => setData(response.items))
        .catch((error) => {
          console.log(error);
        });
    };
    useEffect(()=>{
        getData("all")
    },[])
    const search = () =>{
        var value = document.getElementById("search").value;
        getData(value)
    }
    console.log("name", data);
    return (
      <div className="category">
        <div className="category-menu">
          <div className="category-menu-title">Popular by Genre</div>
          <div className="category-menu-container">
            <div className="category-menu-container-search">
              <input placeholder="Search" type="text" id="search" />
              <a onClick={() => search()}>
                <i class="bx bx-search"></i>
              </a>
            </div>
            <ul className="category-menu-container-nav">
              {menuItems.map((item, i) => (
                <li
                  className="category-menu-container-nav-item"
                  id={i}
                  value={item.name}
                  onClick={(e) => getData(e.target.textContent)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="category-content">
          {data.map((item, i) => (
            <div className="category-content-backdrop">
              <CardItem data={item} />
            </div>
          ))}
        </div>
      </div>
    );
}

export default Category
