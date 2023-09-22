import React from 'react';
import Customernavbar from './Customernavbar';
import foodHeaderBgImage from '../images/food-bg-header.jpeg';

const Customerhome = () => {
  const headerStyles = {
    backgroundImage: `url(${foodHeaderBgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff', // Text color
    fontSize: '3rem', // Text font size
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Optional text shadow
    position: 'relative',
  };

  const imageOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.3)', // Lighten the image by adjusting the opacity (0.0 to 1.0)
    filter: 'brightness(1.5)', // Adjust the brightness (1.0 is normal, less than 1.0 darkens, more than 1.0 lightens)
  };

  return (
    <>
      <Customernavbar />
      <div className="App" style={headerStyles}>
        <div>
          <div className='custom-heading-font font-extrabold text-8xl text-slate-900'>Welcome to Cafeasy!</div>
          <div className='custom-body-font text-slate-700 text-center pt-4'>Hungry? We Got You!</div>
        </div>
        <div style={imageOverlayStyles}></div>
      </div>

      <div className="container mx-auto mt-10" style={{ width: "60vw", overflow: "hidden" }}>

        <div className="flex shadow-md my-10">
          <div className="bg-white px-10 py-10" style={{ width: "100%" }}>
            <div className="flex mt-10 mb-5">
              <h3 className="custom-body-font font-semibold text-gray-600 text-s uppercase w-2/5">Food Items</h3>
              <h3 className="custom-body-font font-semibold text-gray-600 text-s uppercase w-1/5 text-center">Quantity</h3>
              <h3 className="custom-body-font font-semibold text-gray-600 text-s uppercase w-1/5 text-center">Price</h3>
            </div>
            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div class="flex w-2/5"> 
                <div class="w-20">
                  <img class="h-24" src="https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800" alt=""/>
                </div>
                <div class="flex flex-col justify-center ml-4 flex-grow">
                  <span class="font-bold text-sm">Samosa</span>
                </div>
              </div>
              <div class="flex justify-center w-1/5">
                <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                </svg>

                <input class="mx-2 border text-center w-8" type="text" value="1"/>

                <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                </svg>
              </div>
              <span class="text-center w-1/5 font-semibold text-sm">Rs.10</span>
            </div>
          </div>
        </div>

        <div className="flex shadow-md my-10">
          <div className="bg-white px-10 py-10" style={{ width: "100%" }}>
            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div class="flex w-2/5"> 
                <div class="w-20">
                  <img class="h-24" src="https://www.foodie-trail.com/wp-content/uploads/2021/04/20210405_122805835_iOS-scaled.jpg" alt=""/>
                </div>
                <div class="flex flex-col justify-center ml-4 flex-grow">
                  <span class="font-bold text-sm">Aloo Patty</span>
                </div>
              </div>
              <div class="flex justify-center w-1/5">
                <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                </svg>

                <input class="mx-2 border text-center w-8" type="text" value="1"/>

                <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                </svg>
              </div>
              <span class="text-center w-1/5 font-semibold text-sm">Rs.20</span>
            </div>
          </div>
        </div>

        <div className="flex shadow-md my-10">
          <div className="bg-white px-10 py-10" style={{ width: "100%" }}>
            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div class="flex w-2/5"> 
                <div class="w-20">
                  <img class="h-24" src="https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg" alt=""/>
                </div>
                <div class="flex flex-col justify-center ml-4 flex-grow">
                  <span class="font-bold text-sm">Burger</span>
                </div>
              </div>
              <div class="flex justify-center w-1/5">
                <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                </svg>

                <input class="mx-2 border text-center w-8" type="text" value="1"/>

                <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                </svg>
              </div>
              <span class="text-center w-1/5 font-semibold text-sm">Rs.30</span>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Customerhome
