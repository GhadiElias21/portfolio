import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import node from '../assets/node.png'
import express1 from '../assets/express.png'
import mongo from '../assets/mongo23.png'

const Skills = (props) => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
   
   
      <div className='max-w-[1100px]  mx-auto p-1 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>{props.lang?'Навыки':'Skills'}</p>
              <p className='py-4'> { props.lang? "// Это технологии, с которыми я работал":"// These are the technologies I've worked with"}</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#e98e1f] hover:scale-110 duration-500  hover:shadow-[#ffe852]'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#114585] hover:scale-110 duration-500 hover:shadow-[#2079ff]'>
                  <img className='w-20 mx-auto' src={CSS} alt="CSS" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#696919] hover:scale-110 duration-500 hover:shadow-[#daff20] '>
                  <img className='w-20 mx-auto' src={JavaScript} alt="JAVASCRIPT" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md  shadow-[#1d4b8b] hover:scale-110 duration-500 hover:shadow-[#12a8ff]'>
                  <img className='w-20 mx-auto '  src={ReactImg} alt="REACT" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md  shadow-[#a9a9a9] hover:scale-110 duration-500 hover:shadow-[#ffffff]'>
                  <img className='w-20 mx-auto' src={GitHub} alt="GITHUB" />
                  <p className='my-4'>GITHUB</p>
              </div>
       
              <div className='shadow-md shadow-[#135017] hover:scale-110 duration-500 hover:shadow-[#45c425]'>
                  <img className='w-28 mx-auto' src={node} alt="NODEJS" />
                  <p className='my-4'>NODEJS</p>
     
              </div>

              <div className='shadow-md shadow-[#5f1f5f] hover:scale-110 duration-500 hover:shadow-[#f10bf9] ' >
                  <img className='w-22 mx-auto' src={express1} alt="EXPRESS.JS " />
                  <p className='my-4'>EXPRESS.JS</p>
     
              </div>
              <div className='shadow-md shadow-[#32531a] hover:scale-110 duration-500 hover:shadow-[#46f90b]'>
                  <img className='w-14.2 mx-auto' src={mongo} alt="MONGODB" />
                  <p className='my-4'>MONGODB</p>
     
              </div>

          </div>
      </div>
    </div>
  );
};

export default Skills;
