import React from 'react'
import Customernavbar from './Customernavbar'


const Customerhome = () => {
  return (
    <>
    <Customernavbar/>
  <div class="container mx-auto mt-10" style={{width:"60vw",overflow:"hidden"}}>
    <div class="flex shadow-md my-10">
      <div class="bg-white px-10 py-10" style={{width:"100%"}}>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Food Items</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
        </div>
        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
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
  </div>
    </>
  )
}

export default Customerhome