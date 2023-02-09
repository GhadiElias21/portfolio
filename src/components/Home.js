import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'


function Home(props) {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
  
   {/* {container} */}
 <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-pink-600 '> {props.lang?'Привет, меня зовут':'Hi, my name is'}  </p>
    <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ghadi Elias</h1>
    <h2 className=' text-4xl sm:text-7xl font-bold text-[#8892b0] ' >{props.lang?'и я  junior full-stack разработчик':'and i am a junior full-stack Developer'}</h2>
    <p className='text-[#a3afd1] py-4 max-w-[700px]'> {props.lang?' Превращение мечты в реальность по одной строке кода за раз! Создание веб-приложений с использованием современных технологий, как я преодолеваю разрыв между дизайном и разработкой.':
    'Turning dreams into reality one code line at a time! Crafting web applications using modern technologies as I bridge the gap between design and development.'}
    </p>
    
    <div className="md:hidden text-[#ff4eb8] py-4 max-w-[700px]'  ">
    { props.lang?<p>вы можете изменить язык на английский, открыв меню и нажав на EN </p> :<p> you can change the language to russian by opening the menu and pressing on RU</p>}


    </div>
    
    

    <div>
    <Link to='work' smooth={true} offset={50} duration={500} >
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          {props.lang?'Посмотреть работу':'View work'}
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
