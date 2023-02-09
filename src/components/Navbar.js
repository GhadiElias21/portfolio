import React ,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from '../assets/logo.png'
import {Link} from 'react-scroll'
import Resume from '../assets/resume.doc'

function Navbar(props) {
 const [nav,setNav]=useState(false)
 const [isRu,setIsRu]=useState(false)

 const handleLanguage=()=>{
      setIsRu(!isRu);
  props.changeLangHandler(!isRu)}
 


  const handleClick=()=> {setNav(!nav) }
 
    return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
         <img className="ml-[-100px] mb-[-70px]" src={logo} alt="logo" style={{width:"400px"}}/>
      </div>
      <div onClick={handleLanguage} className="hidden md:flex text-5xl mb-[70px] hover:mb-[10px] duration-300 text-pink-300 cursor-pointer bg-[#0a192f]">
        {!isRu?'RU':'EN'}</div>
      { 
        <ul className="hidden md:flex">
         <li>
         <Link  to="home" smooth={true} offset={50} duration={500} >
         {isRu?'главнaя':'Home'}
        </Link>
         </li>
        { <li>
          <Link  to="about" smooth={true} offset={50} duration={500} >
          {isRu?'обо мне':'About'}
        </Link>
         </li>} 
         <li>
         <Link  to="skills" smooth={true}  duration={500} >
         {isRu?'Навыки':'Skills'}
        </Link>
          </li>
         <li>
         <Link  to="work" smooth={true}  duration={500} >
         {isRu?'работа':'Work'}
        </Link>
          </li>
         <li>
          
         <Link  to="contact" smooth={true}  duration={500} >
         {isRu?'контакт':'contact'}
        </Link>
          </li>
        </ul>}
    
      
      <div onClick={handleClick}  className="md:hidden hover:cursor-pointer  z-10">
        {!nav? <FaBars/> : <FaTimes/>}
      </div>
   
     <ul className={!nav?'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
       
       
          <li  className="py-6 text-4xl"> <Link  onClick={handleClick}  to="home" smooth={true} offset={50} duration={500} >
         {isRu?'главнaя':'Home'}
        </Link></li>
        { <li className="py-6 text-4xl" > <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500} >
          {isRu?'обо мне':'About'}
        </Link></li>} 
         <li  className="py-6 text-4xl"> <Link  onClick={handleClick} to="skills" smooth={true}  duration={500} >
         {isRu?'Навыки':'Skills'}
        </Link></li>
         <li  className="py-6 text-4xl"> <Link  onClick={handleClick} to="work" smooth={true}  duration={500} >
         {isRu?'работа':'Work'}
        </Link></li>
         <li  className="py-6 text-4xl"><Link   onClick={handleClick} to="contact" smooth={true}  duration={500} >
         {isRu?'контакт':'contact'}
        </Link></li>
         <div onClick={handleLanguage} className="md:hidden z-10 text-5xl mb-[70px] hover:mb-[10px] duration-300 text-pink-400 cursor-pointer bg-[#0a192f]">
        {!isRu?'RU':'EN'}</div>
     </ul>

   
     <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-10000">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/ghadi-elias-411812227/"  target="_blank">
                Linkedin <FaLinkedin size={30}/>
            </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/BAGGADI?tab=repositories"  target="_blank">
                Github <FaGithub size={30}/>
            </a>
        </li>

        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a className="flex justify-between items-center w-full text-gray-300" href="mailto: gh8adi_elias@outlook.com"  target="_blank">
                Mail <HiOutlineMail  size={30}/>
            </a>
        </li>

        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a className="flex justify-between items-center w-full text-gray-300" download href={Resume}>
               Resume <BsFillPersonLinesFill size={30}/>
            </a>
        </li>
      </ul>
       
     </div> 


  { nav? <div className="md:hidden flex  fixed flex-col top-[35%] left-0">
  <ul>
    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
        <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/ghadi-elias-411812227/"  target="_blank">
            Linkedin <FaLinkedin size={30}/>
        </a>
    </li>
    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
        <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/BAGGADI?tab=repositories"  target="_blank">
            Github <FaGithub size={30}/>
        </a>
    </li>

    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
        <a className="flex justify-between items-center w-full text-gray-300" href="mailto: gh8adi_elias@outlook.com"   target="_blank">
            Mail <HiOutlineMail  size={30}/>
        </a>
    </li>

    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
        <a className="flex justify-between items-center w-full text-gray-300" download href={Resume}>
            Resume <BsFillPersonLinesFill size={30}/>
        </a>
    </li>
  </ul>
    
  </div> : ''
}




     
    </div>
  )
}

export default Navbar