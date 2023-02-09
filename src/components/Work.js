import React from 'react';
import Kresht from '../assets/bar.png';
import monetka from '../assets/monetka.png';
import royal from '../assets/royal.png'
import hookah from '../assets/hooka.png'
import tochka from '../assets/tochka.png'
import shareYourMemory from '../assets/shareyourmemory.png'
const Work = (props) => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            {props.lang?'Работа':'Work'}
          </p>
          <p className='py-6'>{props.lang?"//Ознакомьтесь с некоторыми из моих последних работ": "//Check out some of my recent work"}</p>
          <p className='py-6'>{props.lang?"некоторые проекты могут не содержать демо из-за ограничений mongoDb": "some projects may not contain a demo beacuse of mongoDb restrictions but the repositories in github conatain a preview"}</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

           
          <div
            style={{ backgroundImage: `url(${Kresht})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
               Kresht Barber Shop
              </span>
              <div className='pt-8 text-center'>
                <a href='https://kresht-barber-shop.netlify.app'  target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/BAGGADI/barbershop'  target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${monetka})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
             Monetka
              </span>
              <div className='pt-8 text-center'>
                <a href='https://monetka.netlify.app/index.html'  target="_blank">  
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/BAGGADI/monetka'      target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          <div
            style={{ backgroundImage: `url(${royal})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
         
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
               Royal Bank
              </span>
              <div className='pt-8 text-center'>
                <a href='https://royal-bank.netlify.app'          target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/BAGGADI/royal2'        target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${hookah})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
           
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
               Superior Hookah
              </span>
              <div className='pt-8 text-center'>
                <a href='https://superior-hookah.netlify.app/'       target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/BAGGADI/SUPERIOR-HOOKAHS' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
           
          <div
            style={{ backgroundImage: `url(${shareYourMemory })` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
           
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
               share your memory
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/GhadiElias21/share-your-memory'  target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${tochka})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'  target="_blank">
               TochkaAI
              </span>
              <div className='pt-8 text-center'>
               
                <a href='https://github.com/GhadiElias21/TochkaAI'  target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
