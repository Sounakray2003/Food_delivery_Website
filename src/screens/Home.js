import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/Card'


export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:4000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    //  console.log(response[0],response[1]);
    setFoodItems(response[0])
    setFoodCat(response[1]);
  }

  useEffect(() => {
    loadData()
  }, [])





  return (
    <div>
      <div><Navbar /></div>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner" id='carousel'>
            <div className='carousel-caption' style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                <button className="btn text-white bg-danger" onClick={() => { setSearch('') }}>X</button>
                
              </div>

            </div>
            <div className="carousel-item active">
              <img src="https://wallpaperaccess.com/full/1312802.jpg" className="d-block w-100 h-500" style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://wallpaperaccess.com/full/1166678.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://wallpaperaccess.com/full/462773.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='container'>
        {
          foodCat != []
            ?foodCat.map((data) => (
              <div className='row mb-3' key={data._id}>
                <div className='fs-3 m-3'>
                  {data.CategoryName}
                </div>
                <hr />
                {foodItems !== 0
                  ? foodItems.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search)))
                      .map(filterItems => (
                        <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                          <Card foodItem={filterItems} options={filterItems.options[0]} />
                        </div>
                      ))
                  : <div key={`no-data-${data._id}`}>No Such Data Found</div>}
              </div>
            ))
            
             : ""
        }
      </div>
      <div><Footer /></div>
    </div>
  )
}
