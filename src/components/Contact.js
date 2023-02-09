import React,{useState} from 'react'


const Contact = (props) => {
     const [enteredText,setEnteredName] = useState('')
     const [text,setText]=useState('')
     const [email,setEmail]=useState('')
     const formIsValid= enteredText.trim().length !==0 && text.trim().length !==0 && email.trim().length !==0

const formSubmit=event =>{
 

  setEnteredName('')
  setText('')
}


  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form onSubmit={formSubmit} method='POST' action="https://getform.io/f/0bffdd14-923b-4d83-9f56-d11a5990598e" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>{props.lang?"Kонтакт":"Contact"}</p>
                <p className='text-gray-300 py-4'>{props.lang?'заполните и отправьте форму ниже или отправьте мне электронное письмо':'// Submit the form below or shoot me an email'} - gh8adi_elias@outlook.com</p>
                <p className='text-gray-300 py-4'>{props.lang?'Если границы кнопки нет, заполните пробел':'if there is no button"s border please fill the gap'}</p>

            </div>
            <input    onChange={(e)=>{setEnteredName(e.target.value)}} className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input    onChange={(e)=>{setEmail(e.target.value)}}       className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea onChange={(e)=>{setText(e.target.value)}}        className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button disabled={!formIsValid} className='text-white submit border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>{props.lang? "давайте сотрудничать"  :"Let's Collaborate"}</button>
        </form>
    </div>
  )
}

export default Contact